<?php
/**
 * @version    1.1.3
 * @package    Pkb Social
 * @author     Dmitry Rekun <support@norrnext.com>
 * @copyright  Copyright © 2015 - 2016 NorrNext. All rights reserved.
 * @license    GNU General Public License version 3 or later; see license.txt
 */

return [
    'name' => 'norrnext/widget-social',

    'label' => 'PKB Social',

    'events' => [

        'view.scripts' => function ($event, $scripts) use ($app) {
            $scripts->register('platform.js', 'https://apis.google.com/js/platform.js');
            $scripts->register('widget-social', 'norrnext/social:app/bundle/settings.js', ['~widgets', 'platform.js']);
        }

    ],

    'render' => function ($widget) use ($app) {
        return $app->view('norrnext/social:/views/index.php', compact('widget'));
    }
];
