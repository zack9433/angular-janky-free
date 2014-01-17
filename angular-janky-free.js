/**
 *
 * Created by ZackCF_Yang on 2014/1/17.
 */

'use strict';

angular.module('ngJankyFree', [])
    .directive('ngJankyFree', function ($timeout, $log) {
        return {
            restrict: 'A',
            link: function postLink(scope, element) {
                var timer,
                    jqWin = angular.element(window);

                if ('body' === element[0].nodeName.toLowerCase()) {
                    jqWin.on('scroll', function() {
                        $timeout.cancel(timer);
                        if (!element.hasClass('disable-hover')) {
                            element.addClass('disable-hover');
                        }

                        timer = $timeout(function() {
                            element.removeClass('disable-hover');
                        }, 500);
                    });
                } else {
                    $log.error('The element must be body!');
                }
            }
        };
    });
