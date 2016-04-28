<div id="fb-root"></div>
<script>(function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/<?php echo $intl->getLocaleTag(); ?>/sdk.js#xfbml=1&version=v2.5&appId=465258483495780";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));</script>

<div class="fb-page"
     data-width="<?= $widget->get('fb.width', 340); ?>"
     data-height="<?= $widget->get('fb.height', 500); ?>"
     data-href="https://www.facebook.com/<?= $widget->get('fb.profile', 'norrnext'); ?>"
     data-small-header="<?= intval($widget->get('fb.header', 1)); ?>"
     data-adapt-container-width="<?= intval($widget->get('fb.adapt', 1)); ?>"
     data-hide-cover="<?= intval($widget->get('fb.cover', 0)); ?>"
     data-show-facepile="<?= intval($widget->get('fb.facepile', 1)); ?>"
     data-show-posts="<?= intval($widget->get('fb.posts', 0)); ?>">
</div>