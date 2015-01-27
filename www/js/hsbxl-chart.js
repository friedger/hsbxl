<link rel="import" href="../polymer/polymer.html">
<link rel="import" href="chart-line.html">

<polymer-element name="hsbxl-chart" extends="chart-line">
  <template>
    <shadow></shadow>
    <core-ajax id="ajax"
      auto
      url="https://www.hackerspace.be/api/accounting/current"
      on-core-response="{{chartLoaded}}"
      handleAs="json">
  </template>
  <script>
    Polymer('hsbxl-chart',{
      chartLoaded: function(){
        chartData = this.$.ajax.response;
        this.values = chartData.values;
        this.labels = chartData.labels;
      }
    });
  </script>
</poylmer-element>