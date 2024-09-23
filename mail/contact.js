$(function () {
    $("#contactForm input, #contactForm textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function ($form, event, errors) {
            // إذا كان هناك أخطاء في الحقول، يتم تنفيذ هذا الكود
        },
        submitSuccess: function ($form, event) {
            event.preventDefault();
            var name = $("input#name").val();
            var email = $("input#email").val();
            var subject = $("input#subject").val();
            var message = $("textarea#message").val();

            $this = $("#sendMessageButton");
            $this.prop("disabled", true);

            $.ajax({
                url: "/mail/contact.php",
                type: "POST",
                data: {
                    name: name,
                    email: email,
                    subject: subject,
                    // يمكنك إضافة المزيد من البيانات هنا إذا لزم الأمر
                },
                cache: false,
                success: function () {
                    // إذا تم إرسال الرسالة بنجاح، يتم تنفيذ هذا الكود
                },
                error: function () {
                    // إذا حدث خطأ أثناء إرسال الرسالة، يتم تنفيذ هذا الكود
                },
                complete: function () {
                    // هنا يتم تنفيذ الكود بعد الانتهاء من عملية الإرسال
                }
            });
        },
        filter: function () {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function (e) {
        e.preventDefault();
        $(this).tab("show");
    });
});

$('#name').focus(function () {
    $('#success').html('Q');
});