<script src="https://apis.google.com/js/platform.js" async defer></script>
<div class="g-<?= $widget->get('gp.type', 'page'); ?>"
    data-href="https://plus.google.com/<?= $widget->get('gp.id', 108999239898392136664); ?>"
    data-layout="<?= $widget->get('gp.layout', 'portrait'); ?>"
    data-showphoto="<?= intval($widget->get('gp.showphoto', 1)); ?>"
    data-showcoverphoto="<?= intval($widget->get('gp.showphoto', 1)); ?>"
    data-showowners="<?= intval($widget->get('gp.showowners', 0)); ?>"
    data-showtagline="<?= intval($widget->get('gp.showtagline', 1)); ?>"
    data-theme="<?= $widget->get('gp.theme', 'light'); ?>"
    data-width="<?= intval($widget->get('gp.width', 300)); ?>"
>
</div>
