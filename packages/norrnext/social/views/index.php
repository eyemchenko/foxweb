<div class="pkb-social uk-responsive-width">

    <?php $layout = $widget->get('layout', 'default');

    if ($layout == 'default') :
        echo $view->render('norrnext/social:/views/default.php');
    endif;

    if ($layout == 'tabs' || $layout == 'switcher') :
        echo $view->render('norrnext/social:/views/switcher.php');
    endif; ?>

    <div style="font-size:7pt;color:#eeeeee" class="uk-text-left">
        <a href="https://www.norrnext.com" title="NorrNext - Pagekit extensions" target="_blank" rel="follow">norrnext.com</a>
    </div>

</div>
