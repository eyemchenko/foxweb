<?php
/**
 * @version    1.0.0
 * @package    Pkb Social Share
 * @author     Dmitry Rekun and Artem Valchuk <support@norrnext.com>
 * @copyright  Copyright © 2015 NorrNext. All rights reserved.
 * @license    GNU General Public License version 3 or later; see license.txt
 */

return [
    'uninstall' => function ($app) {
        $app['config']->remove('norrnext/social-share');
    }
];
