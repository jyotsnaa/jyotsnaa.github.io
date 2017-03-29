(function($,Drupal){'use strict';Drupal.behaviors.yamlFormDetailsSave={attach:function(context){if(!window.localStorage){return;}
$('details > summary',context).once('yamlform-details-summary-save').click(function(){var $details=$(this).parent();var name=Drupal.yamlFormDetailsSaveGetName($details);if(!name){return;}
var open=($details.attr('open')!='open')?1:0;localStorage.setItem(name,open);});$('details',context).once('yamlform-details-save').each(function(){var $details=$(this);var name=Drupal.yamlFormDetailsSaveGetName($details);if(!name){return;}
var open=localStorage.getItem(name);if(open===null){return;}
if(open==1){$details.attr('open','open');}
else{$details.removeAttr('open');}});}};Drupal.yamlFormDetailsSaveGetName=function($details){if(!window.localStorage){return'';}
var yamlformId=$details.attr('data-yamlform-element-id');if(yamlformId){return'Drupal.yamlform.'+ yamlformId.replace('--','.');}
var detailsId=$details.attr('id');if(!detailsId){return'';}
var $form=$details.parents('form');if(!$form.length||!$form.attr('id')){return'';}
var formId=$form.attr('id');if(!formId){return'';}
formId=formId.replace(/--.+?$/,'').replace(/-/g,'_');detailsId=detailsId.replace(/--.+?$/,'').replace(/-/g,'_');return'Drupal.yamlform.'+ formId+'.'+ detailsId;}})(jQuery,Drupal);