function Validator(formSelector)
{
    // Hàm lấy ra thẻ cha của element để vailidate cho nó
    function getParent(element, selector) {
        while (element.parentElement)
        {
            if(element.parentElement.matches(selector)) {
                return element.parentElement;
            }
            else
            {
                element = element.parentElement;
            }
        }
    }

    // Tạo object để viết các hàm kiểm tra
    var validatorRules = {
        required: function(value) {
            return value ? undefined : 'Vui lòng nhập trường này';
        },

        email: function(value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : "Vui lòng nhập email";
        },

        phone: function(value) {
            var regex = /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/;
            return regex.test(value) ? undefined : "Vui lòng nhập số điện thoại";
        },

        min: function(min) {
            return function(value) {
                return value.length >= min ? undefined : `Vui lòng nhập ít nhất ${min} ký tự`;
            }
        },

        max: function(max) {
            return function(value) {
                return value.length <= max ? undefined : `Vui lòng nhập tối đa ${max} ký tự`;
            }
        },

        password: function(value) {
            var regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
            return regex.test(value) ? undefined : "Mật khẩu phải chứa ít nhất 1 chữ số, 1 chữ thường, 1 chữ hoa và tối thiểu 8 kí tự";
        },
    }


    // Tạo object để lưu key là giá trị của name và giá trị là giá trị của rules trong thẻ input
    var formRules = {};

    // Lấy ra form element trong DOM từ formSelector
    var formElement = document.querySelector(formSelector);

    // Chỉ xữ lý khi có form element trong DOM nếu không có sẽ ko lọt vào đây
    if(formElement)
    {
        // Lấy ra các thẻ input có attribute name và rules
        var inputs = formElement.querySelectorAll('[name][rules]');
        // Duyệt qua các thẻ input đã lấy
        for(var input of inputs) 
        {
            // Cắt kí tự | từ giá trị của attribute rules để lấy tên hàm và dùng nó để gọi hàm đã viết trên object validator
            var rules = input.getAttribute('rules').split('|');
            for(var rule of rules)
            {
                var ruleInfor;
                var isRuleHasValue = rule.includes(':')
                // Vì có một số giá trị vẫn còn kí tự nên phải cắt thêm để lấy ra value của hàm đã viết ở trên object
                if(isRuleHasValue)
                {
                    ruleInfor = rule.split(':');
                    rule = ruleInfor[0];
                }

                var ruleFunction = validatorRules[rule];
                if(isRuleHasValue)
                {
                    ruleFunction = ruleFunction(ruleInfor[1]);
                }

                if(Array.isArray(formRules[input.name]))
                {
                    formRules[input.name].push(ruleFunction);
                }
                else
                {
                    formRules[input.name] = [ruleFunction];
                }
            }

            // Lắng nghe sự kiện
            input.onblur = handleValidate;
            input.oninput = handleClearError;
        }


        // Hàm xử lý khi không nhập dữ liệu
        function handleValidate(event) {
            var rules = formRules[event.target.name];
            var errorsMessage;

            rules.some(function(rule) {
                errorsMessage = rule(event.target.value);
                return errorsMessage;
            });

            if(errorsMessage)
            {
                var formGroup = getParent(event.target, '.form-group');
                if(formGroup)
                {
                    formGroup.classList.add('invalid');
                    var formMessage = formGroup.querySelector('.form-message');
                    if(formMessage)
                    {
                        formMessage.innerText = errorsMessage;
                    }
                }
            }
            return !errorsMessage;
        }


        // Hàm clear message lỗi khi người dùng nhập dữ liệu
        function handleClearError(event)
        {
            var formGroup = getParent(event.target, '.form-group');
            if(formGroup.classList.contains('invalid'))
            {
                formGroup.classList.remove('invalid');
                var formMessage = formGroup.querySelector('.form-message');
                if(formMessage)
                {
                    formMessage.innerText = '';
                }
            }
        }

        // Xữ lý hành vi sumit form
        formElement.onsubmit = (event) => {
            event.preventDefault();

            var inputs = formElement.querySelectorAll('[name][rules]');

            var isValid = true;
            for(var input of inputs)
            {
                if(!handleValidate({target: input}))
                {
                    isValid = false;
                }
            }

            // Khi có lỗi thì sumit form
            if(isValid)
            {
                if(typeof this.onSubmit === 'function')
                {
                    var enableInputs = formElement.querySelectorAll('[name]');
                    
                    var formValues = Array.from(enableInputs).reduce(function(values, input) {
                        
                        switch(input.type) {
                            case 'radio':
                                values[input.name] = formElement.querySelector('input[name="' +input.name + '"]:checked').value;
                                break;

                            case 'checkbox':
                                if(!input.matches(':checked')) {
                                    values[input.name] = '';
                                    return values;
                                };
                                if(!Array.isArray(values[input.name]))
                                {
                                    values[input.name] = [];
                                }
                                values[input.name].push(input.value);
                                break;

                            case 'file':
                                values[input.name] = input.files;
                                break;
                            default:
                                values[input.name] = input.value;
                        }

                        return values;
                    }, {});

                    //Gọi lại hàm và trả về giá trị của các input mà người dùng nhập vào
                    this.onSubmit(formValues);
                }
                else
                formElement.submit();
            }
        }
    }
}
