// 1. make own bar chart, multiple, single feature(ex. danceiness), and sum
// 2. make own heatmap, static number of boxes
// 3. use google chart
// 4. use amchart


// chart inspo

// google cool no dowload
// https://developers.google.com/chart/interactive/docs/gallery/columnchart#stacked-column-charts
// cool idea
// https://nhn.github.io/tui.chart/latest/tutorial-example10-01-heatmap-chart-basic
// heatmap inspo
// https://nhn.github.io/tui.chart/latest/tutorial-example10-01-heatmap-chart-basic
// loads of cool maps (this stacked) no download
// https://www.amcha/rts.com/demos/stacked-column-chart/
// could do heat map with different color/saturations
// or can do stacked bar chart





// query hide paragraph and shift features up
$('html').click(function(e) {                    
    hideSubheading();             

});
function hideSubheading() {
    console.log($( window ).width());
    if ($( window ).width() < 600) {
        document.querySelector(`.subheadingtext`).style["line-height"] = "0em";
        document.querySelector(`.subheadingtext`).style.opacity = 0;
    } else {
        document.querySelector(`.subheadingtext`).style["line-height"] = "1.1em";
        document.querySelector(`.subheadingtext`).style.opacity = 1;
    }
}

setSubheadingText();
function setSubheadingText() {
    let out = "More often than not, I find that my mood affects the music I choose to listen to. So I thought it would be interesting to take a look, seeing what my music choice says about my current state. Here are the top " + names.length + " songs I've listened to in the past month, ranked by various features of the 'Happines Scale.'"
    document.querySelector(`.subheadingtext`).innerHTML =  out;
}

// //Most/Least Played Labels

// playedLabels();
function mostPlayed() {
    if (document.querySelector('.art').style.opacity == 0) {
        document.querySelector(`.most-played`).style.opacity = 1;
    } else {
        document.querySelector(`.most-played`).style.opacity = 0;
    }
}
function hideMostPlayed() {
    document.querySelector(`.most-played`).style.opacity = 0;
}
function leastPlayed() {
    if (document.querySelector('.art').style.opacity == 0) {
        document.querySelector(`.least-played`).style.opacity = 1;
    } else {
        document.querySelector(`.least-played`).style.opacity = 0;
    }
}
function hideLeastPlayed() {
    document.querySelector(`.least-played`).style.opacity = 0;
}


// //Describe selected feature

function featureDescription() {
    var choice = document.getElementById("options").value;
    if (choice == 'total') {
        document.querySelector(`#feature-description`).innerHTML = "A highly-scientific, carefully crafted, intensely precise, and subjectively-weighted aggregate score for the track's overall happiness factor.";
        document.querySelector(`#feature-description`).style.opacity = 1;
    } else if (choice == "energy") {
        document.querySelector(`#feature-description`).innerHTML = "A perceptual measure of intensity and activity. Perceptual features contributing to this attribute include dynamic range, perceived loudness, timbre, onset rate, and general entropy.";
        document.querySelector(`#feature-description`).style.opacity = 1;
    } else if (choice == "valence") {
        document.querySelector(`#feature-description`).innerHTML = "The musical positiveness conveyed by a track. Tracks with high valence sound more positive (e.g. happy, cheerful, euphoric), while tracks with low valence sound more negative (e.g. sad, depressed, angry).";
        document.querySelector(`#feature-description`).style.opacity = 1;
    } else if (choice == "mode") {
        document.querySelector(`#feature-description`).innerHTML = "The modality (major or minor) of a track.";
        document.querySelector(`#feature-description`).style.opacity = 1;
    } else if (choice == "danceability") {
        document.querySelector(`#feature-description`).innerHTML = "How suitable a track is for dancing based on a combination of musical elements including tempo, rhythm stability, beat strength, and overall regularity.";
        document.querySelector(`#feature-description`).style.opacity = 1;
    } else if (choice == "tempo") {
        document.querySelector(`#feature-description`).innerHTML = "The overall estimated tempo of a track in beats per minute (BPM).";
        document.querySelector(`#feature-description`).style.opacity = 1;
    }    
}
function featureDescriptionOff() {
    document.querySelector(`#feature-description`).style.opacity = 0;
}



// calculate value for each feature

total();

function energy() {
    for (let i = 0; i < 50; i++) {
        if (i < names.length) {
            v = 100 * energies[i];
            height = `${v}%`;
            document.querySelector(`.bar${i}`).style.height = height;
        } else {
            document.querySelector(`.bar${i}`).style.width = 0;
            document.querySelector(`.bar${i}`).style.margin = 0;
        }
    }
    return v;
}

function valence() {
    for (let i = 0; i < 50; i++) {
        if (i < names.length) {
            v = 100 * valences[i];
            height = `${v}%`;
            document.querySelector(`.bar${i}`).style.height = height;
        } else {
            document.querySelector(`.bar${i}`).style.width = 0;
            document.querySelector(`.bar${i}`).style.margin = 0;
        }
    }
    return v;
}

function mode() {
    for (let i = 0; i < 50; i++) {
        if (i < names.length) {
            if (modes[i] == 1) {
                height ="90%";
            } else {
                height = "10%";
            }
            document.querySelector(`.bar${i}`).style.height = height;
        } else {
            document.querySelector(`.bar${i}`).style.width = 0;
            document.querySelector(`.bar${i}`).style.margin = 0;
        }
    }
    return v;
}

function danceability() {
    for (let i = 0; i < 50; i++) {
        if (i < names.length) {
            v = 100 * danceabilities[i];
            height = `${v}%`;
            document.querySelector(`.bar${i}`).style.height = height;
        } else {
            document.querySelector(`.bar${i}`).style.width = 0;
            document.querySelector(`.bar${i}`).style.margin = 0;
        }
    }
    return v;
}

function tempo() {
    for (let i = 0; i < 50; i++) {
        // treat max tempo as 200
        if (i < names.length) {
            v = tempos[i] /200 * 100;
            height = `${v}%`;
            document.querySelector(`.bar${i}`).style.height = height;
        } else {
            document.querySelector(`.bar${i}`).style.width = 0;
            document.querySelector(`.bar${i}`).style.margin = 0;
        }
    }
    return v;
}

function total() {
    for (let i = 0; i < 50; i++) {
        if (i < names.length) {
            v = energies[i] + valences[i] + danceabilities[i] + tempos[i]/200;
            if (modes[i] == 1) {
                v += 0.7;
            } else {
                v += 0.2;
            }
            v = v * 100 / 5;
            height = `${v}%`;
            document.querySelector(`.bar${i}`).style.height = height;
        } else {
            document.querySelector(`.bar${i}`).style.width = 0;
            document.querySelector(`.bar${i}`).style.margin = 0;
        }
    }
    return v;
}


// dropdown choice to change graph
document.getElementById("options").onchange = function() {
    var choice = document.getElementById("options").value;
    console.log(choice);
    window[`${choice}`]();
};


// big text artist and song name
function showDescription(i) {
    document.querySelector('#description').style.opacity = 1;
    document.querySelector('.name').innerHTML = description(i)[0];
    document.querySelector('.artist').innerHTML = description(i)[1];
    item = ".tooltiptext" + i
    document.querySelector(item).innerHTML = description(i)[2];
    
}
function hideDescription(i) {
    document.querySelector('#description').style.opacity = 0;
}





// format tooltips
function description(i) {
    // let value =document.querySelector(`.bar${i}`).style.height;
    let choice = document.getElementById("options").value;
    let out = '';
    if (choice == "total") {
        out = document.querySelector(`.bar${i}`).style.height;
        // takes out %sign
        out = out.substring(0,out.length - 1);
        out = parseInt(out)/100;
    } else if (choice == "energy") {
        out = energies[i];
    } else if (choice == "valence") {
        out = valences[i];
    } else if (choice == "mode") {
        if (modes[i] == 1) {
            out = "Major Key";
        } else {
            out = "Minor Key";
        }
    } else if (choice == "danceability") {
        out = danceabilities[i];
    } else if (choice == "tempo") {
        out = tempos[i] + " BPM";
    }
    return [names[i], artists[i], out];
}



// remove art and audio button
// when clicked anywhere but on a bar
$('html').click(function(e) {                    
    if(!$(e.target).hasClass('bar') )
    {
        removeArt();
        removeAudio();               
    }
});

// show and hide audio button and artwork

removeArt();
function removeArt() {
    document.querySelector('.art').style.opacity = 0;
    // could set src ="", but is weird with mostleast played labels
}
function removeAudio() {
    if (document.querySelector('#audio').paused) {
        document.querySelector('#audio').style.transform = "scale(0)";
    }
}
function art(i) {
    arturl = artworks[i];
    previewurl = previews[i];
    // if already selected, turn off art
    if (document.querySelector('.art').src == arturl) {
        if (document.querySelector('.art').style.opacity == 1) {
            removeArt();
            removeAudio();
        } else {
            document.querySelector('.art').style.opacity = 1;
            document.querySelector('#audio').style.transform = "scale(0.8)";
        }
        
    } else {
        document.querySelector('.art').src = arturl;
        document.querySelector('.art').style.opacity = 0.1;
        document.querySelector('.loading-text').style.visibility = 'visible';        

        document.querySelector('#audio').src = previewurl;
        document.querySelector('#audio').style.transform = "scale(0.8)";
    }
}


// makes image visible only when fully loaded
document.querySelector('.art').addEventListener('load', () => {
    document.querySelector('.loading-text').style.visibility = 'hidden';        
    document.querySelector('.art').style.opacity = 1;
});

