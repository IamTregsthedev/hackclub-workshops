import * as Tone from 'tone'
Tone.start();
const synth = new Tone.Synth().toDestination();
var pad = document.getElementById('pad');
function down(event){
    synth.triggerAttack(400);
}

function up(event) {
    synth.triggerRelease();
}
pad.addEventListener('pointerdown', down)
pad.addEventListener('pointerup', up)