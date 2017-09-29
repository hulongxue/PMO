$(document).ready(function() {
    $('#recruitdemandForm').bootstrapValidator({
		message: 'This value is not valid',

        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
        	rr: {
				validators: {
                    notEmpty: {
                        message: 'Please enter your rr'
                    },
                    remote:{
                    	type:"post",
                    	url: path+'/service/resume/checkTel',
                    	date:{
                    		rr:function(){return $("#rr").val();}
                    	},
                        message:"rr already exists"
                    }

                   /* regexp: {
                        regexp: /^([\u4E00-\u9FA5]|\w)*$/,
                        message: '请勿包含特殊字符'
                    },
                    stringLength: {
                        min: 1,
                        max: 20,
                        message: '请输入长度在1到20位之间的用户名'
                    },
                     remote: {
                        url: paths+'/service/employee/checkErExists',
                        message: '用戶名不存在',
                        delay :  2000,//per 2s send a request
                        type: 'POST'
                    }*/
                 }
            },

            jobCode: {
                validators: {
                    notEmpty: {
                        message: 'Please enter your jobCode'
                    }
                }
            },
            skill: {
                validators: {
                    notEmpty: {
                        message: 'Please enter your jobCode'
                    }
                }
            },
            requestor: {
                validators: {
                    notEmpty: {
                        message: 'Please enter your requestor'
                    }

                }
            },
            position: {
                validators: {
                    notEmpty: {
                        message: 'Please select your position'
                    }

                }
            },

            hsbcSubDeptId: {
                validators: {
                    notEmpty: {
                        message: 'Please enter your hsbcSubDeptId'
                    }

                }
            },
           /* staffName: {
                validators: {
                    notEmpty: {
                        message: '请输入中文名字'
                    },
                    regexp: {
                        regexp: /^([\u4E00-\u9FA5])*$/,

                        message: '请输入中文字符'

                    }

                }
            },*/
            status: {
                validators: {
                    notEmpty: {
                        message: 'Please select your status'
                    }

                }
            },
            hrPriority: {
                validators: {
                    notEmpty: {
                        message: 'Please select your hrPriority'
                    }

                }
            },
            reqPublishedDate: {
                validators: {
                    notEmpty: {
                        message: 'Please Choose your Date'
                    }

                }
            }
        }
    }) 
    
    //对编辑页面加校验
    $('#recruitdemandFormEdit').bootstrapValidator({
		message: 'This value is not valid',

        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
        	rrEdit: {
				validators: {
                    notEmpty: {
                        message: 'Please enter your rr'
                    },
                 }
            },

            jobCodeEdit: {
                validators: {
                    notEmpty: {
                        message: 'Please enter your jobCode'
                    }
                }
            },
            
            requestorEdit: {
                validators: {
                    notEmpty: {
                        message: 'Please enter your requestor'
                    }

                }
            },
            ageingEdit: {
                validators: {
                    notEmpty: {
                        message: 'Please enter your ageing'
                    }

                }
            },

            profilesNoEdit: {
                validators: {
                    notEmpty: {
                        message: 'Please enter your profilesNo'
                    }

                }
            },
            interviewedNoEdit: {
                validators: {
                    notEmpty: {
                        message: 'Please enter your interviewedNo'
                    }

                }
            },
            proposedJoiningDateEdit: {
                validators: {
                    notEmpty: {
                        message: 'Please enter your proposedJoiningDate'
                    }

                }
            },
            sowSignedEdit: {
                validators: {
                    notEmpty: {
                        message: 'Please enter your sowSigned'
                    }

                }
            },
            bgvClearedEdit: {
                validators: {
                    notEmpty: {
                        message: 'Please enter your bgvCleared'
                    }

                }
            },
            reasonEdit: {
                validators: {
                    notEmpty: {
                        message: 'Please enter your reason'
                    }

                }
            },
            remarkEdit: {
                validators: {
                    notEmpty: {
                        message: 'Please enter your remark'
                    }

                }
            },
            doNumberEdit: {
                validators: {
                    notEmpty: {
                        message: 'Please enter your doNumber'
                    }

                }
            },
            reqPublishedDate1Edit: {
                validators: {
                    notEmpty: {
                        message: 'Please Choose your Date'
                    }

                }
            },
            plannedOnboardDate1: {
                validators: {
                    notEmpty: {
                        message: 'Please Choose your Date'
                    }

                }
            }
        }
    }) 
});



/*function login(e) {
	var userName = $("#userName").val();
	var password = $("#password").val();

	$.ajax({
			url : path+"/service/manage/login",
			type : "post",
			async : true,
			cache : false,
			dataType : "json",
			data : {'userName' : userName, 'password' : password},
			timeout : 20000,
			success : function(result) {
				if (result) {
					 window.location.href = path+"/service/employee/index.html";
				}
				else {
					//$("#loginAlert").width(500);
					$("#loginAlert").html('用户名密码错误');
					$("#loginAlert").css({color:"red"});
				}
			}
		});
}*/
/*$('#submitBtn').bind("click", function(){
	
	window.location.href = path+"/service/employee/index.html";
	
});*/