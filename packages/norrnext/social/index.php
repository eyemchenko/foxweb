<?php
/**
 * @version    1.1.3
 * @package    Pkb Social
 * @author     Dmitry Rekun <support@norrnext.com>
 * @copyright  Copyright © 2015 - 2016 NorrNext. All rights reserved.
 * @license    GNU General Public License version 3 or later; see license.txt
 */

return [

    'name' => 'norrnext/social',

    'type' => 'extension',

    'autoload' => [

        'Norrnext\\Social\\' => 'src'

    ],

    'widgets' => [
        'widgets/social.php'
    ],

    'resources' => [
        'norrnext/social:'  => '',
    ]

];
