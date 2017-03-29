(function($,Drupal){'use strict';$(function(){var $document=$(document);$document.on('state:visible',function(e){if(!e.trigger){return TRUE;}
if(!e.value){$(':input',e.target).andSelf().each(function(){var $input=$(this);backupValue(this);clearValue(this);triggerEventHandlers(this);});}
else{$(':input',e.target).andSelf().each(function(){restoreValue(this);triggerEventHandlers(this);});}});$document.on('state:disabled',function(e){if(e.trigger){$(e.target).trigger('yamlform:disabled').find('select, input, textarea').trigger('yamlform:disabled');}});});function triggerEventHandlers(input){var $input=$(input);var type=input.type;var tag=input.tagName.toLowerCase();if(type=='checkbox'||type=='radio'){$input.trigger('change').trigger('blur');}
else if(tag=='select'){$input.trigger('change').trigger('blur');}
else if(type!='submit'&&type!='button'){$input.trigger('input').trigger('change').trigger('keydown').trigger('keyup').trigger('blur');}}
function backupValue(input){var $input=$(input);var type=input.type;var tag=input.tagName.toLowerCase();if(type=='checkbox'||type=='radio'){$input.data('yamlform-value',$input.prop('checked'));}
else if(tag=='select'){var values=[];$input.find('option:selected').each(function(i,option){values[i]=option.value;});$input.data('yamlform-value',values);}
else if(type!='submit'&&type!='button'){$input.data('yamlform-value',input.value);}}
function restoreValue(input){var $input=$(input);var value=$input.data('yamlform-value');if(typeof value==='undefined'){return true;}
var type=input.type;var tag=input.tagName.toLowerCase();if(type=='checkbox'||type=='radio'){$input.prop('checked',value)}
else if(tag=='select'){$.each(value,function(i,option_value){$input.find("option[value='"+ option_value+"']").prop("selected",true);});}
else if(type!='submit'&&type!='button'){input.value=value;}}
function clearValue(input){var $input=$(input);var type=input.type;var tag=input.tagName.toLowerCase();if(type=='checkbox'||type=='radio'){$input.prop('checked',false)}
else if(tag=='select'){if($input.find('option[value=""]').length){$input.val('');}
else{input.selectedIndex=-1;}}
else if(type!='submit'&&type!='button'){input.value=(type=='color')?'#000000':'';}}})(jQuery,Drupal);