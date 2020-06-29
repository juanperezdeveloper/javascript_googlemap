// add roof click count
var addRoofClickedCount = 0;

const allRanges = document.querySelectorAll(".range-wrap");
allRanges.forEach(wrap => {
  const range = wrap.querySelector(".range");
  const bubble = wrap.querySelector(".bubble");

  range.addEventListener("input", () => {
    setBubble(range, bubble);
  });
  setBubble(range, bubble);
});

function setBubble(range, bubble) {
  const val = range.value;
  const min = range.min ? range.min : 0;
  const max = range.max ? range.max : 100;
  const newVal = Number(((val - min) * 100) / (max - min));
  bubble.innerHTML = val;
  // Sorta magic numbers based on size of the native UI thumb
  bubble.style.left = `calc(${newVal}% + (${-5 - newVal * 0.5}px))`;
}

$('input[type="range"]').on('input', function () {
  var val = ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'));
  $(this).css('background-image',
              '-webkit-gradient(linear, left top, right top, '
              + 'color-stop(' + val + ', rgb(254, 112, 67)), '
              + 'color-stop(' + val + ', rgb(196, 196, 196))'
              + ')'
              );
});

// change the status of roof covering
$('#roofs').on('click', '.roof_covering', function() {
  var parentClass = $(this).parent();
  parentClass.find('.roof-active').removeClass('roof-active');
  parentClass.find('.roof_covering i').removeClass('roof-active');
  $(this).find('button').addClass('roof-active');
  $(this).find('i').removeClass('d-none');
});

// commercial button clicked
function commercial() {
  $('.type-property').hide();
}

// residential button clicked
function residential() {
  $('.type-property').show();
}

// add roof button clicked
function addRoof() {
  addRoofClickedCount += 1;
  html = '<p class="text-center">Roof #' + (addRoofClickedCount + 1) + '</p>';
  html += '<div class="row my-3 roof_type_' + addRoofClickedCount + '"><div class="col-md-6"><p>Map roof</p><div id="map_' + addRoofClickedCount + '" class="google-map"></div></div><div class="col-md-6"><p>Roof area</p>';
  html += '<input type="text" id="roof_address_line_' + addRoofClickedCount + '" class="form-control" placeholder="Enter your address line 1">'
  html += '<button id="delete_button_' + addRoofClickedCount + '" class="mt-5">Delete Selected Shape</button>'
  html += '<div id="area_' + addRoofClickedCount + '" class="mt-3"></div>'
  html += '</div></div><div class="row"><div class="form-group my-4 col-xs-12 col-md-12">'
  html += '<label for="direction_' + addRoofClickedCount + '" class="control-label">Which direction is the roof facing?</label>'
  html += '<select class="form-control" id="direction_' + addRoofClickedCount + '">'
  html += '<option value="" selected disabled>Select preffered roof facing: Eg North</option><option>North</option><option>North East</option><option>East</option><option>South East</option><option>South</option><option>South West</option><option>West</option><option>North West</option></select></div></div><div class="row"><div class="form-group my-2 mx-3"><label for="scaffolding" class="control-label">Do you think scaffolding is required?</label></div><div class="onoffswitch my-2">'
  html += '<input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="myonoffswitch_scaffolding_' + addRoofClickedCount + '" tabindex="0" checked>'
  html += '<label class="onoffswitch-label" for="myonoffswitch_scaffolding_' + addRoofClickedCount + '"><span class="onoffswitch-inner"></span><span class="onoffswitch-switch"></span></label></div></div><p>Type of roof covering</p><div class="row my-3">'
  html += '<div class="col-md-2 col-sm-4 col-xs-6 roof_covering"><div class="border border-gray rounded-lg"><button type="button" class="btn btn-default btn-circle btn-lg border border-circle float-right mt-3 mr-3"><i class="fa fa-check d-none text-light"></i></button><img src="./assets/img/roof/asphalt_composition.png" class="w-67 my-5 pl-5"></div><p class="text-center my-2">Asphalt/<br>Composition</p></div>'
  html += '<div class="col-md-2 col-sm-4 col-xs-6 roof_covering"><div class="border border-gray rounded-lg"><button type="button" class="btn btn-default btn-circle btn-lg border border-circle float-right mt-3 mr-3"><i class="fa fa-check d-none text-light"></i></button><img src="./assets/img/roof/metal_standing_seam.png" class="w-67 my-5 pl-5"></div><p class="text-center my-2">Metal standing<br>seam</p></div>'
  html += '<div class="col-md-2 col-sm-4 col-xs-6 roof_covering"><div class="border border-gray rounded-lg"><button type="button" class="btn btn-default btn-circle btn-lg border border-circle float-right mt-3 mr-3"><i class="fa fa-check d-none text-light"></i></button><img src="./assets/img/roof/concrete_tile.png" class="w-67 my-5 pl-5"></div><p class="text-center my-2">Concrete<br>Tile</p></div>'
  html += '<div class="col-md-2 col-sm-4 col-xs-6 roof_covering"><div class="border border-gray rounded-lg"><button type="button" class="btn btn-default btn-circle btn-lg border border-circle float-right mt-3 mr-3"><i class="fa fa-check d-none text-light"></i></button><img src="./assets/img/roof/metal_aluminium_shake.png" class="w-67 my-5 pl-5"></div><p class="text-center my-2">Metal / aluminium<br>shake</p></div>'
  html += '<div class="col-md-2 col-sm-4 col-xs-6 roof_covering"><div class="border border-gray rounded-lg"><button type="button" class="btn btn-default btn-circle btn-lg border border-circle float-right mt-3 mr-3"><i class="fa fa-check d-none text-light"></i></button><img src="./assets/img/roof/wood_shake.png" class="w-67 my-5 pl-5"></div><p class="text-center my-2">Wood shake</p></div>'
  html += '<div class="col-md-2 col-sm-4 col-xs-6 roof_covering"><div class="border border-gray rounded-lg"><button type="button" class="btn btn-default btn-circle btn-lg border border-circle float-right mt-3 mr-3"><i class="fa fa-check d-none text-light"></i></button><img src="./assets/img/roof/concrete_clay_title.png" class="w-67 my-5 pl-5"></div><p class="text-center my-2">Concrete clay<br>tile</p></div>'
  html += '<div class="col-md-2 col-sm-4 col-xs-6 roof_covering"><div class="border border-gray rounded-lg"><button type="button" class="btn btn-default btn-circle btn-lg border border-circle float-right mt-3 mr-3"><i class="fa fa-check d-none text-light"></i></button><img src="./assets/img/roof/vinyl_membrane.png" class="w-67 my-5 pl-5"></div><p class="text-center my-2">Vinyl membrane</p></div>'
  html += '<div class="col-md-2 col-sm-4 col-xs-6 roof_covering"><div class="border border-gray rounded-lg"><button type="button" class="btn btn-default btn-circle btn-lg border border-circle float-right mt-3 mr-3"><i class="fa fa-check d-none text-light"></i></button><img src="./assets/img/roof/rolled_flat_roof.png" class="w-67 my-5 pl-5"></div><p class="text-center my-2">Rolled / Flat roof</p></div>'
  html += '</div><div class="row"><div class="form-group my-2 mx-3"><label for="roof_flat" class="control-label">Is the roof flat?</label></div>'
  html += '<div class="onoffswitch my-2"><input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="myonoffswitch_roof_flat_' + addRoofClickedCount + '" tabindex="0" checked><label class="onoffswitch-label" for="myonoffswitch_roof_flat_' + addRoofClickedCount + '"><span class="onoffswitch-inner"></span><span class="onoffswitch-switch"></span></label></div>'
  html += '<div class="form-group my-2 mx-3"><label for="roof_shadow" class="control-label">Is the roof shadow?</label></div>'
  html += '<div class="onoffswitch my-2"><input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="myonoffswitch_roof_shadow_' + addRoofClickedCount + '" tabindex="0"><label class="onoffswitch-label" for="myonoffswitch_roof_shadow_' + addRoofClickedCount + '"><span class="onoffswitch-inner"></span><span class="onoffswitch-switch"></span></label></div></div>'

  document.getElementById('roofs').innerHTML += html;
  // draw a google map
  initialize();
}