function generateConfig() {
    config = {
        'name': document.getElementById('recording_name').value,
        'desc': document.getElementById('recording_desc').value,
        'lat': parseFloat(document.getElementById('recording_latitude').value),
        'long': parseFloat(document.getElementById('recording_longitude').value),
        'species': [],
        'threshold': parseFloat(document.getElementById('model_accuracy_threshold').value),
    };

    console.log(config);

    fileblob = new Blob([JSON.stringify(config)], {
        type: 'application/json'
    });

    link = document.createElement("a");
    link.download = "birdnet_config.json";
    link.href = URL.createObjectURL(fileblob);
    link.click();
    link.remove();
    
}

document.getElementById('genconfigbutton').addEventListener('click', generateConfig);