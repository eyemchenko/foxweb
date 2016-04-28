<?php
$order = explode(',', $widget->get('order'));
$layout = $widget->get('layout', 'default');
$titles = $widget->get('titles', 'full');

if ($layout == 'tabs') : ?>
    <ul class="uk-tab" data-uk-tab="{connect:'#tab-pkbsocial-<?= $widget->id; ?>'}">
<?php endif;

if ($layout == 'switcher') :?>
    <ul class="uk-subnav uk-subnav-pill" data-uk-switcher="{connect:'#tab-pkbsocial-<?= $widget->id; ?>'}">
<?php endif;

    foreach ($order as $value) :
        if ($value == 1) :
            if ($titles == 'full') : ?>
                <li><a href="#"><i class="uk-icon-facebook"></i> Facebook</a></li>
            <?php endif;
            if ($titles == 'text') : ?>
                <li><a href="#">Facebook</a></li>
            <?php endif;
            if ($titles == 'icons') : ?>
                <li><a href="#"><i class="uk-icon-facebook"></i></a></li>
            <?php endif;
        endif;

        if ($value == 2) :
            if ($titles == 'full') : ?>
                <li><a href="#"><i class="uk-icon-google-plus"></i> Google+</a></li>
            <?php endif;
            if ($titles == 'text') : ?>
                <li><a href="#">Google+</a></li>
            <?php endif;
            if ($titles == 'icons') : ?>
                <li><a href="#"><i class="uk-icon-google-plus"></i></a></li>
            <?php endif;
        endif;

        if ($value == 3) :
            if ($titles == 'full') : ?>
                <li><a href="#"><i class="uk-icon-vk"></i> VK</a></li>
            <?php endif;
            if ($titles == 'text') : ?>
                <li><a href="#">VK</a></li>
            <?php endif;
            if ($titles == 'icons') : ?>
                <li><a href="#"><i class="uk-icon-vk"></i></a></li>
            <?php endif;
        endif;
    endforeach; ?>

</ul>

<div class="uk-switcher" id="tab-pkbsocial-<?= $widget->id; ?>">
    <?php foreach ($order as $value) :
        if ($value == 1) : ?>
            <div>
                <?= $view->render('norrnext/social:/views/fb.php'); ?>
            </div>
        <?php endif;

        if ($value == 2) : ?>
            <div>
                <?= $view->render('norrnext/social:/views/gp.php'); ?>
            </div>
        <?php endif;

        if ($value == 3) : ?>
            <div class="uk-active">
                <?= $view->render('norrnext/social:/views/vk.php'); ?>
            </div>
        <?php endif;
    endforeach; ?>
</div>
