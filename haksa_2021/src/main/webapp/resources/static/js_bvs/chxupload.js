/**
 *  CHXUpload HTML5
 */

function setConfing () {
    // 파일을 전송 받을 서버 사이드 스크립트 URL 주소
    this.ServerURL = '/servlet/controller.library.AttachUploadServlet';
    this.f_obj = null;
    this.UploadFormActionName = null;
    // 파일 하나의 최대 허용 크기
    this.AllowMaxFileSize = 10 * 1000 * 1000; // 10mb

    // 전체 파일의 최대 허용 크기
    this.AllowMaxFileTotalSize = 30 * 1000 * 1000; // 30mb

    // 전체 파일의 최대 허용 개수
    this.AllowMaxFileNumber = 100;

    // FORM action 이름: <form action="upload ...>, 서버 사이드 스크립트에서 참조하지 않을 경우, 무시한다.
    this.UploadFormActionName = 'upload';

    // FORM input file 이름: <input type="file" name="attach">
    this.FileInputName = 'p_upfile';

    // 파일 선택 창의 파일 유형 필터링
    this.FileAccept = '*.*';

    // 아래 설정은 가능하면 수정하지 않는다.
    this.UploadFiles = [];
    this.SuccessFiles = [];
    this.BYTES_PER_CHUNK = 1024 * 1024;
    this.reader = null;
    this.UploadTotalSize = 0;
    this.LoadedTotalSize = 0;
    this.callme = null;
    this.oid = 'chxupload_object';
}

function CHXUpload() {
    this.toType = (function (global) {
        var toString = CHXUpload.prototype.toString,
            re = /^.*\s(\w+).*$/;
        return function (obj) {
            if (obj === global) {
                return 'global';
            }
            return toString.call(obj).replace(re, '$1').toLowerCase();
        };
    }(this));

    this.undefined = function (obj) {
        return obj === void(0); // obj === undefined;
    };
    this.support = (!this.undefined(File) && !this.undefined(Blob) && !this.undefined(FileList) &&
        (!!Blob.prototype.webkitSlice || !!Blob.prototype.mozSlice || !!Blob.prototype.slice || false));

    setConfing.call(this);
    return this;
}

CHXUpload.prototype = {
// -----------------------------------------------------------------------------
//
//
	setServerURL : function (v_url){
		this.ServerURL = v_url;
	},
	setFormData : function (v_obj){
		this.f_obj = v_obj;
	},
	setFormAction : function (v_act){
		this.UploadFormActionName = v_act;
	},
	setAllowMaxFileNumber : function (v_max_cnt){
		this.AllowMaxFileNumber = v_max_cnt;
	},
	setAllowMaxFileSize : function (v_max_size){
		//mb단위
		p_filelimit = document.getElementById('p_filelimit').value;
        if(p_filelimit == "") p_filelimit = v_max_size
		this.AllowMaxFileSize = p_filelimit * 1000 * 1000;
	},
	setAllowMaxFileTotalSize : function (v_max_total_size){
		//mb단위
		p_filelimit = document.getElementById('p_filelimit').value;
        if(p_filelimit == "") p_filelimit = v_max_total_size
		this.AllowMaxFileTotalSize = p_filelimit * 1000 * 1000;
	},
    run : function () {
        var elem = document.getElementById(this.oid),
            input = document.createElement('input'),
            self = this,
            onChangeFileEventHandler = function (evt) {
                self.selectedFiles(evt);
            },
            addButton,
            removeButton;

        if (!this.support) {
            console.log('CHXUpload가 현재 브라우저를 지원하지 않습니다.');
            return false;
        }
        if (!elem) {
            console.log('chxupload-object id를 찾을 수 없습니다.');
            return false;
        }

        addButton = document.getElementById('IdAddFileButton');
        removeButton = document.getElementById('IdRemoveFileButton');

        if (addButton) {
            this.addEvent(addButton, 'click', function () {
                input.click();
            });
        }
        if (removeButton) {
            this.addEvent(removeButton, 'click', function () {
                var list = document.getElementById('IdUploadFileList').parentNode,
                    input = list.getElementsByTagName('INPUT'), i = 0, checkbox, remove = [];
                for (; i < input.length; i++) {
                    checkbox = input[i];
                    if (checkbox.getAttribute('type').toLowerCase() === 'checkbox' && checkbox.checked) {
                        remove.push(checkbox);
                    }
                }
                if (remove) {
                    i = 0;
                    for (; i < remove.length; i++) {
                        list.removeChild(remove[i].parentNode.parentNode.parentNode);
                        self.removeItem(remove[i].id);
                    }
                }
            })
        }

        input.setAttribute('type', 'file');
        input.setAttribute('name', 'chx_FileUpload[]');
        input.setAttribute('id', 'IdFileUpload');
        input.setAttribute('multiple', 'multiple');
        input.setAttribute('accept', this.FileAccept);
        input.className = 'chxupload_input_form';
        this.addEvent(input, 'change', onChangeFileEventHandler);

        elem.parentNode.replaceChild(input, elem);

        //this.progressBar = document.getElementById('IdProgressBar');
        //this.label = document.getElementById('IdProgressBarLabel');
        //this.progressBarTotal = document.getElementById('IdTotalProgressBar');
        //this.labelTotal = document.getElementById('IdTotalProgressBarLabel');
        this.uploadWrapper = document.getElementById('IdUploadWrapper');
        this.clear();

        this.addEvent(this.uploadWrapper, 'dragover', function (evt) {
            this.className = 'chxupload_filelist_dragover';
            self.stopEvent(evt);
        });
        this.addEvent(this.uploadWrapper, 'dragleave', function (evt) {
            this.className = 'chxupload_filelist';
            self.stopEvent(evt);
        });
        this.addEvent(this.uploadWrapper, 'drop', function (evt) {
            self.stopEvent(evt);
            self.addFiles(evt.dataTransfer.files || []);
            this.className = 'chxupload_filelist';
        });
        return true;
    },
    removeItem : function (name) {
        var i = 0;
        for (; i < this.UploadFiles.length; i++) {
            if (this.UploadFiles[i].name === name) {
                this.UploadTotalSize -= this.UploadFiles[i].size;
                this.UploadFiles.splice(i, 1);
            }
        }
        //this.updateUploadingTotalSize();
    },
    selectedFiles : function (evt) {
        var files = evt.target.files || [];
        this.stopEvent(evt);
        this.addFiles(files);
    },
    addFiles : function (files) {
        var i, file, num, list, row, col, checkbox, file_cnt;

        list = document.getElementById('IdUploadFileList');

        file_cnt = this.UploadFiles.length;

        if((files.length+file_cnt)> this.AllowMaxFileNumber){
        	alert("첨부파일은 " + this.AllowMaxFileNumber + "까지만 가능합니다.");
        	return;
        }

        num = files.length;

        if (num > this.AllowMaxFileNumber) {
            num = this.AllowMaxFileNumber;
        }

        for (i = 0; i < num; i++) {
            file = files[i];

            if (this.UploadTotalSize + file.size > this.AllowMaxFileTotalSize) {
            	alert("파일용량이 초과하였습니다.");
            	return;
            }
            if (file.size === 0 || file.size > this.AllowMaxFileSize) {
            	alert("파일용량이 초과하였습니다.");
            	return;
            }
            if (this.dupFileCheck(file)) {
            	alert("같은 파일이 이미 첨부 되었습니다.");
            	return;
            }
            this.UploadTotalSize += file.size;

            // 파일 타입 체크
            this.UploadFiles.push(file);

            row = list.cloneNode(true);
            row.setAttribute('id', 'ID_UPLOAD_FILE_' + file.name);
            col = row.firstChild;

            while (col.nextSibling) {
                if (col.className === 'chxupload_upload_filename' ||
                    col.className === 'chxupload_upload_filesize' ||
                    col.className === 'chxupload_upload_status')
                {
                    col.style.backgroundColor = '#fff';
                }
                switch (col.className) {
                    case 'chxupload_upload_filename' :
                        col.style.textAlign = 'left';
                        checkbox = document.createElement('input');
                        checkbox.setAttribute('type', 'checkbox');
                        checkbox.setAttribute('checked', 'true');
                        checkbox.style.verticalAlign = 'middle';
                        checkbox.style.marginTop = '0';
                        checkbox.setAttribute('id', file.name);
                        col.replaceChild(document.createTextNode("  "+file.name), col.firstChild);
                        col.insertBefore(checkbox, col.firstChild);
                        break;
                    case 'chxupload_upload_filesize' :
                        col.replaceChild(document.createTextNode(this.formatSize(file.size) + '\u00a0'), col.firstChild);
                        col.style.textAlign = 'right';
                        break;
                    case 'chxupload_upload_status' :
                        col.replaceChild(document.createTextNode('대기'), col.firstChild);
                        break;
                }
                col = col.nextSibling;
            }
            var new_div = document.createElement("div");
            $(new_div).prop("class","list");
            //var new_row = $(new_div).append(row);
            list.parentNode.appendChild(new_div).appendChild(row);
            //list.parentNode.appendChild(new_div);
        }
        /*if (this.UploadTotalSize > 0) {
            this.updateUploadingTotalSize();
        }*/
    },
    dupFileCheck : function (addFile) {
        var i = 0, file;
        for (; i < this.UploadFiles.length; i++) {
            file = this.UploadFiles[i];
            if (addFile.name === file.name && addFile.size === file.size && addFile.type === file.type) {
                return true;
            }
        }
        return false;
    },
    updateUploadingSize : function (size) {
        var elem = document.getElementById('IdUploadingFileSize');
        elem.replaceChild(document.createTextNode('(' + this.formatSize(size) + ')'), elem.firstChild);
    },
    updateUploadingTotalSize : function () {
        var elem = document.getElementById('IdUploadingTotalFileSize');
        elem.replaceChild(document.createTextNode('(' + this.formatSize(this.UploadTotalSize) + ')'), elem.firstChild);
    },
    formatSize: function(size) {
        if (size < 1024) {
            return size + ' Bytes';
        } else if (size < 1024 * 1024) {
            return (size / 1024.0).toFixed(0) + ' KB';
        } else if (size < 1024 * 1024 * 1024) {
            return (size / 1024.0 / 1024.0).toFixed(1) + ' MB';
        } else {
            return (size / 1024.0 / 1024.0 / 1024.0).toFixed(1) + ' GB';
        }
    },
    updateStatus : function (name, status) {
        var node, row = document.getElementById('ID_UPLOAD_FILE_' + name);
        node = row.getElementsByClassName('chxupload_upload_status')[0];
        //node.replaceChild(document.createTextNode(status), node.firstChild);
    },
    startUpload : function () {

    	var xhr = new XMLHttpRequest()

        var data = new FormData(this.f_obj)
    	data.append('p_process',  this.UploadFormActionName);
    	for (var i =0 ; i < this.UploadFiles.length; i++) {
    		var file = this.UploadFiles[i];
    		data.append(this.FileInputName, file);
    	}
        xhr.open('POST', this.ServerURL, true);
        xhr.responseType = 'text';

        xhr.addEventListener("error", function (evt) {
            alert("파일 전송 중 오류: " + this.error.code);
        }, false);

        /*xhr.upload.onprogress = function (evt) {
            if (evt.lengthComputable) {
                bytes = evt.loaded;
                total = evt.total;
                if (self.progressBar) {
                    self.progressBar.value = Math.floor((bytes / total) * 100);
                    self.progressBar.textContent = self.progressBar.value; // Fallback
                }
                if (self.label) {
                    self.label.innerHTML = self.progressBar.value + '%';
                }
                if (self.progressBarTotal) {
                    self.progressBarTotal.value = Math.floor(((self.LoadedTotalSize + bytes) / self.UploadTotalSize) * 100);
                    self.progressBarTotal.textContent = self.progressBarTotal.value;
                }
                if (self.labelTotal) {
                    self.labelTotal.innerHTML = self.progressBarTotal.value + '%';
                }
            }
        };*/

        xhr.addEventListener('loadend', function (evt) {
            /*self.LoadedTotalSize += size;
            self.updateStatus(file.name, '완료');
            setTimeout(function () {
                self.startUpload();
            }, 100);*/
        });

        xhr.addEventListener('load', function (evt) {
            var response = '';
            if (this.status === 200) {
                response = this.response.replace(/^\s*/g, '').replace(/\s*$/g, '');
                document.write(response);
               /* self.SuccessFiles.push({
                    'name' : name,
                    'size' : size,
                    'type' : type,
                    'response' : response
                });*/
            } else {
                alert('HTTP 오류: ' + xhr.status);
            }
        });
        xhr.send(data);
    },
    /*startUpload : function () {
        var file = this.UploadFiles.shift();
        if (file) {
            //this.updateUploadingSize(file.size);
            //this.updateStatus(file.name, '전송중');
            this.dataLoadHandler(file);
        } else {
            this.clear();
            this.callme(this.SuccessFiles);
        }
    },*/
    clear : function () {
        this.UploadFiles = [];
        this.UploadTotalSize = 0;
        this.LoadedTotalSize = 0;
        // this.progressBar.value = 0;
        // this.progressBarTotal.value = 0;
        // this.label.innerHTML = '0%';
        // this.labelTotal.innerHTML = '0%';
    },
    addEvent : function (evTarget, evType, evHandler) {
        if (evTarget.addEventListener) {
            evTarget.addEventListener(evType, evHandler, false);
        } else {
            evTarget.attachEvent('on' + evType, evHandler);
        }
    },
    stopEvent : function (ev) {
        if (ev && ev.preventDefault) {
            ev.preventDefault();
            ev.stopPropagation();
        } else {
            ev = ev || window.event;
            ev.cancelBubble = true;
            ev.returnValue = false;
        }
    }
// -----------------------------------------------------------------------------
//
//
};
