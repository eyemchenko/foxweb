<?php
$order = explode(',', $widget->get('order', [1,2,3]));

foreach ($order as $value) :

    if ($value == 1) : ?>
        <div class="uk-margin">
            <?= $view->render('norrnext/social:/views/fb.php'); ?>
        </div>
    <?php endif;

    if ($value == 2) : ?>
        <div class="uk-margin">
            <?= $view->render('norrnext/social:/views/gp.php'); ?>
        </div>
    <?php endif;

    if ($value == 3) : ?>
        <?= $view->render('norrnext/social:/views/vk.php'); ?>
    <?php endif;

endforeach;
