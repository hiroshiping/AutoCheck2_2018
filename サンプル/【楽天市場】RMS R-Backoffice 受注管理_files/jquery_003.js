/* Japanese initialisation for the jQuery UI date picker plugin. */
/* Written by Kentaro SATO (kentaro@ranvis.com). */
jQuery(function($){
    $.datepicker.regional['ja'] = {
        closeText: '�Ĥ���',
        prevText: '����',
        nextText: '���',
        currentText: '����',
        monthNames: ['1��','2��','3��','4��','5��','6��',
        '7��','8��','9��','10��','11��','12��'],
        monthNamesShort: ['1��','2��','3��','4��','5��','6��',
        '7��','8��','9��','10��','11��','12��'],
        dayNames: ['������','������','������','������','������','������','������'],
        dayNamesShort: ['��','��','��','��','��','��','��'],
        dayNamesMin: ['��','��','��','��','��','��','��'],
        weekHeader: '��',
        dateFormat: 'yy/mm/dd',
        firstDay: 0,
        isRTL: false,
        showMonthAfterYear: true,
        yearSuffix: 'ǯ'};
    $.datepicker.setDefaults($.datepicker.regional['ja']);
});