function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.json("samples.json").then((data) => {
    var sampleNames = data.names;

    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });

    // Use the first sample from the list to build the initial plots
    var firstSample = sampleNames[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

// Initialize the dashboard
init();

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildMetadata(newSample);
  buildCharts(newSample);
  
}

// Demographics Panel 
function buildMetadata(sample) {
  d3.json("samples.json").then((data) => {
    var metadata = data.metadata;
    // Filter the data for the object with the desired sample number
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];
    // Use d3 to select the panel with id of `#sample-metadata`
    var PANEL = d3.select("#sample-metadata");

    // Use `.html("") to clear any existing metadata
    PANEL.html("");

    // Use `Object.entries` to add each key and value pair to the panel
    // Hint: Inside the loop, you will need to use d3 to append new
    // tags for each key-value in the metadata.
    Object.entries(result).forEach(([key, value]) => {
      PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
    });

  });
}

// 1. Create the buildCharts function.
function buildCharts(sample) {
  // 2. Use d3.json to load and retrieve the samples.json file 
  d3.json("samples.json").then((data) => {
      const metadata = data.metadata;
      let demoPanel = d3.select('#sample-metadata')
      demoPanel.html('');
      let filteredData = metadata.filter(sampleNames => sampleNames.id == id) [0]
      Object.entries(filteredData).forEach[key, value]
        demoPanel.append("h6").text('${key.touppercase()}:')
  )};

    // 3. Create a variable that holds the samples array. 
  function optionChanged(userChoice)
  {demographic (userChoice)
  buildCharts(userChoice)}

    // 4. Create a variable that filters the samples for the object with the desired sample number.

    function buildCharts(sampleID) {
      let data = d3.json("data/samples.json").then(data => {
        const samples = data.samples;
        const metadata = data.metadata
      })
    }

    //  5. Create a variable that holds the first sample in the array.
    let filteredSample = samples.filter(sampleName => sampleName.id == sampleId)[0] // Arrow function to extract the data
    let filteredMetaSample = metadata.filter(sampleName => sampleName.id == sampleId)[0]
    let otu_ids = filteredSample.otu_ids
    let otu_labels = filteredSample.otu_labels
    let samples_values = filteredSample.sample_values
    let wfreq = parseInt(filteredMetaSample.wfreq)

    console.log(otu_ids)
    console.log(otu_labels)
    console.log(samples_values)
    console.log(wfreq)

    function unpack(rows, index) {
        return rows.map(function (row) {
            return row[index];
        });


        function updatePlotly(newdata) {
          Plotly.restyle("pie", "values", [newdata]);
      }
      // Horizontal Chart
      function horizontalChart(dataID) {
          let yticksBar = otu_ids.slice(0, 10).map(otuID => `OTU ${otuID}`).reverse()
          let data = [
              {   
                  y: yticksBar,//otu_ids top10
                  x: samples_values.slice(0,10).reverse(),
                  text: otu_labels.slice(0,10).reverse(), //out_labels  top10
                  type: 'bar',
                  orientation: 'h',
                  width: 0.6,
                  marker: { color: '(55, 83, 109)' }
              },
          ];
          let layout = {
              title: 'Top 10 OTU',

              showlegend: false,
              x axis: {
                  tickangle: 0,
                  zeroline: true,
                  title: "Sample Value",
              },
              yaxis: {
                  zeroline: true,
                  gridwidth: 1,
                  title: "OTU ID"
              },
              //bargap: 0.01,
              height: 370,
              width: 750,
              margin: { t:40 , l: 90, b: 35, r: 20 },
              barmode: 'stack',
              paper_bgcolor: "hotpink",

          };
          Plotly.newPlot('bar', data, layout);
      }

      // Gauge Chart https://plotly.com/javascript/gauge-charts/
      function gauge(dataID) {
          var data = [
              {
                  domain: { x: [0, 1], y: [0, 1] },
                  value: wfreq, //Washing frequency
                  title: { text: "Belly Button Washing frequency" },
                  type: "indicator",

                  mode: "gauge+number+delta",
                  delta: { reference: 4, increasing: { color: 'red' } },
                  gauge: {
                      axis: { range: [0, 9], tickwidth: 1, tickcolor: "pink" },
                      bar:{color: 'sagegreen'},
                      steps: [
                          { range: [0, 4], color: "red" },
                          { range: [4, 9], color: "green" }
                      ],
                      threshold: {
                          line: { color: "black", width: 4 },
                          thickness: 1,
                          value: 9
                      }
                  },
                  bgcolor: "navyblue",
              }
          ];
          var layout = {
              width: 200,
              height: 370,
              margin: { t: 25, r: 25, l: 25, b: 25 },
              paper_bgcolor: "darkgreen",
              font: { color: "black", family: "Times New Roman" }
          };

          
          Plotly.newPlot('gauge', data, layout);
      }
      horizontalChart(sampleId)
      bubbleChart(sampleId)
      gauge(sampleId)
  })
}
})


    // 6. Create variables that hold the otu_ids, otu_labels, and sample_values.


    // 7. Create the yticks for the bar chart.
    // Hint: Get the the top 10 otu_ids and map them in descending order  
    //  so the otu_ids with the most bacteria are last. 

    var yticks = 

    // Function Bubble chart
      // https://plotly.com/javascript/bubble-charts/
     
    // 8. Create the trace for the bar chart. 
    var barData = [
      function bubbleChart(dataID) {
        let xticksBubble = otu_ids.slice(0, 10).map(otuID => `OTU ${otuID}`).reverse()
        var trace1 = {
            x: xticksBubble, //otu_id
            y: samples_values.slice(0,10).reverse(), // sample_values
            text: otu_labels.slice(0,10).reverse(), // otu_labels
            mode: 'markers',
            marker: {
                // color: ['rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)'],
                size: samples_values.slice(0,10).reverse() //size = sample value
            }
        };

    // 9. Create the layout for the bar chart. 
    var barLayout = {
     
    };
        let dataBubble = [trace1];

        var layout = {
            title: 'Top 10 OTU',
            showlegend: false,
            height: 600,
            width: 1150,
            margin: { t:40 , l: 70, b: 35, r: 20 },
            showlegend: false,
            xaxis: {
                tickangle: 0,
                zeroline: false,
                title: "OTU ID"


      
    ];

    // 10. Use Plotly to plot the data with the layout. 
    let data = d3.json("data/samples.json").then(data => {
      console.log(data)
      const samples = data.samples;
      const metadata = data.metadata;
      const names = data.names;
      console.log(samples)
      console.log(metadata)
    
      // dropDown button
      let dropDown = d3.select('#selDataset')
      // dropDown.on('change', handleChange)
      names.forEach(name => {
          dropDown.append('option').text(name).property('value', name);
      });
      demographic('940');
      BuildCharts('940')
  });