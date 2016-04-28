<?php $height = intval($widget->get('vk.height', 400)); ?>

<script type="text/javascript" src="//vk.com/js/api/openapi.js"></script>

<div id="vk_community_<?= $widget->id; ?>"></div>
<script type="text/javascript">
    VK.Widgets.Group("vk_community_<?= $widget->id; ?>",
    {mode: <?= intval($widget->get('vk.mode', 0)); ?>,
    wide: <?= intval($widget->get('vk.wide', 0)); ?>,
    width: "<?= $widget->get('vk.width', 'auto'); ?>",
    height: "<?= $height; ?>",
    color1: '<?php echo substr($widget->get('vk.backgroundcolour', '#FFFFFF'), 1); ?>',
    color2: '<?php echo substr($widget->get('vk.textcolour', '#2B587A'), 1); ?>',
    color3: '<?php echo substr($widget->get('vk.buttonscolour', '#5B7FA6'), 1); ?>'}, <?= $widget->get('vk.groupid', 74773712); ?>);
</script>

<?php // VK height bug
$layout = $widget->get('layout', 'default');

if ($layout == 'tabs' || $layout == 'switcher') : ?>
<script>
    setTimeout(function(){
        $('#vk_community_<?= $widget->id; ?>').height(<?= $height; ?>);
        $('#vk_community_<?= $widget->id; ?>').children('iframe').height(<?= $height; ?>);
    }, 3000);
</script>
<?php endif; ?>
