(function() {
  var addChart, currentNode, data, dependencies, jqueryPlugins, loadDependency, promises, run;

  currentNode = document.currentScript;

  jqueryPlugins = [["highstock", "https://code.highcharts.com/stock/highstock.js"]];

  dependencies = [["jQuery", "https://code.jquery.com/jquery-2.2.3.min.js", jqueryPlugins], ["numeral", "https://cdnjs.cloudflare.com/ajax/libs/numeral.js/1.4.5/numeral.min.js"]];

  data = {
    id: "machine-learning-engineer",
    minRange: "$76.2K",
    maxRange: "$179K",
    range: [104916.28233259977, 129843.0899446155],
    range2: [76204.21080072486, 178765.11206434338],
    pdf: [[46167.200000000004, 3.1406338239595207e-09], [54219.49333333334, 5.356030779740051e-08], [62271.78666666667, 3.9063456935528405e-07], [70324.08, 1.5793362893897308e-06], [78376.37333333334, 4.170335928469627e-06], [86428.66666666667, 8.020812466818716e-06], [94480.95999999999, 1.2116914241959668e-05], [102533.25333333333, 1.5174595460385783e-05], [110585.54666666666, 1.6390253097744732e-05], [118637.84, 1.572890455460259e-05], [126690.13333333333, 1.3718941111237393e-05], [134742.42666666667, 1.1069265445358121e-05], [142794.72, 8.377912905708682e-06], [150847.01333333334, 6.014413853994472e-06], [158899.30666666667, 4.132190355155509e-06], [166951.6, 2.736932481693971e-06], [175003.89333333334, 1.7581099778637716e-06], [183056.18666666668, 1.1007262092048644e-06], [191108.47999999998, 6.744631461948172e-07], [199160.77333333335, 4.058704024220136e-07], [207213.06666666668, 2.405666765494019e-07], [215265.36000000002, 1.4079189317762788e-07], [223317.65333333332, 8.153221543227444e-08], [231369.94666666666, 4.680289369544228e-08], [239422.24, 2.667346276606621e-08], [247474.53333333335, 1.511218680103776e-08], [255526.82666666666, 8.521490128681147e-09], [263579.12, 4.787141263327076e-09], [271631.41333333333, 2.681541277769916e-09], [279683.70666666667, 1.4988787976519371e-09], [287736.0, 8.365783516055465e-10], [287736.0, 8.365783516055465e-10]],
    min: 57709,
    max: 191824,
    avg: 119398.20489507334
  };

  loadDependency = (function(_this) {
    return function(root, varName, scriptSrc, dependencies) {
      var promise;
      return promise = new Promise(function(resolve) {
        var promises, script;
        if (typeof root[varName] !== "function") {
          script = document.createElement("script");
          script.src = scriptSrc;
          script.onload = function() {
            var promises;
            if (Array.isArray(dependencies)) {
              promises = dependencies.map(function(obj) {
                return loadDependency(root[varName], obj[0], obj[1], obj[2]);
              });
              return Promise.all(promises).then(function() {
                return resolve();
              });
            } else {
              return resolve();
            }
          };
          return currentNode.parentNode.insertBefore(script, currentNode.nextSibling);
        } else {
          if (Array.isArray(dependencies)) {
            promises = dependencies.map(function(obj) {
              return loadDependency(root[varName], obj[0], obj[1], obj[2]);
            });
            return Promise.all(promises).then(function() {
              return resolve();
            });
          } else {
            return resolve();
          }
        }
      });
    };
  })(this);

  addChart = (function(_this) {
    return function($el) {
      var distribution, series, zones;
      distribution = data.pdf.map(function(o) {
        return {
          x: parseFloat(o[0]),
          y: parseFloat(o[1])
        };
      });
      zones = [
        {
          fillColor: "#02ccba",
          value: data.range2[0]
        }, {
          fillColor: "#22D4C4",
          value: data.range[0]
        }, {
          fillColor: "#42dccf",
          value: data.range[1]
        }, {
          fillColor: "#22D4C4",
          value: data.range2[1]
        }, {
          fillColor: "#02ccba"
        }
      ];
      series = [
        {
          type: 'spline',
          name: 'comp',
          id: 'comp',
          data: distribution,
          animation: false,
          shadow: false,
          zIndex: 9,
          enableMouseTracking: false,
          dashStyle: "solid",
          fillOpacity: 0.2,
          lineWidth: 0,
          lineColor: "#000",
          borderColor: "#ccc",
          borderWidth: 0,
          marker: {
            radius: 0
          },
          type: 'areaspline',
          name: 'comp-area',
          data: distribution,
          animation: false,
          enableMouseTracking: false,
          shadow: false,
          fillOpacity: 1.0,
          zIndex: 2,
          pointPadding: 0,
          groupPadding: 0,
          marker: {
            radius: 0
          },
          zoneAxis: 'x',
          zones: zones
        }
      ];
      return $el.highcharts({
        colors: ["#02ccba"],
        chart: {
          backgroundColor: null,
          width: 300,
          height: 130,
          marginTop: 5,
          marginLeft: 7,
          marginBottom: 22,
          style: {
            fontFamily: "Open Sans",
            cursor: "pointer"
          }
        },
        title: {
          text: false
        },
        legend: {
          enabled: false
        },
        credits: {
          enabled: false
        },
        exporting: {
          enabled: false
        },
        xAxis: {
          startOnTick: true,
          endOnTick: true,
          min: data.min,
          max: data.max,
          tickLength: 0,
          lineColor: "transparent",
          labels: {
            style: {
              color: "#2e3d49",
              fontWeight: "bold"
            },
            formatter: function() {
              return numeral(this.value).format('$000a').toUpperCase();
            }
          }
        },
        yAxis: {
          gridLineWidth: 0
        },
        plotOptions: {
          series: {
            shadow: true
          }
        },
        series: series
      }, function(chart) {
        var compMax, compMid, compMin, g, i, j, mag, pt1, pt2, ref, seriesCompPoint, xAxis, xMax, xMin, yAxis, yMax, yMid, yMin;
        xAxis = chart.xAxis[0];
        yAxis = chart.yAxis[0];
        xMin = xAxis.toPixels(xAxis.getExtremes().min);
        xMax = xAxis.toPixels(xAxis.getExtremes().max);
        yMin = yAxis.toPixels(yAxis.getExtremes().max);
        yMax = yAxis.toPixels(yAxis.getExtremes().min);
        yMid = (yMax - yMin) * 0.5;
        compMin = xAxis.toPixels(data.min);
        compMax = xAxis.toPixels(data.max);
        compMid = xAxis.toPixels(data.avg);
        if (compMid < xMin) {
          compMid = xMin + 4;
        }
        series = chart.get("comp");
        seriesCompPoint = {
          x: 0,
          y: 0
        };
        if (series.data.length === 0) {
          return;
        }
        for (i = j = 1, ref = series.data.length - 1; 1 <= ref ? j <= ref : j >= ref; i = 1 <= ref ? ++j : --j) {
          pt1 = series.data[i - 1];
          pt2 = series.data[i];
          if (data.avg >= pt1.x && data.avg < pt2.x) {
            mag = (data.avg - pt1.x) / (pt2.x - pt1.x);
            seriesCompPoint.x = 6 + pt1.plotX + ((pt2.plotX - pt1.plotX) * mag);
            seriesCompPoint.y = 5 + pt1.plotY + ((pt2.plotY - pt1.plotY) * mag);
          }
        }
        g = chart.renderer.g().add();
        chart.renderer.circle(seriesCompPoint.x, seriesCompPoint.y, 6).attr({
          stroke: '#fff',
          fill: null,
          'stroke-width': 4
        }).add(g);
        chart.renderer.circle(seriesCompPoint.x, seriesCompPoint.y, 5).attr({
          stroke: '#02ccba',
          fill: "#fff",
          'stroke-width': 2
        }).add(g);
        chart.renderer.label("Average: " + numeral(data.avg).format('$000a').toUpperCase(), seriesCompPoint.x + 20, seriesCompPoint.y - 10).attr({
          stroke: "#2e3d49",
          fontWeight: "bold"
        }).add(g);
        return g.toFront();
      });
    };
  })(this);

  run = (function(_this) {
    return function() {
      var $chart, $chartLink, $heading, $left, $logoImg, $logoLink, $powered, $poweredText, $range, $right, $root, $styles, $title;
      $root = $("<div/>");
      $root.attr("id", "paysa-salary-widget");
      $root.css("overflow", "auto");
      $root.css("zoom", "1");
      $left = $("<div/>");
      $left.addClass("paysa-left");
      $heading = $("<div/>");
      $heading.addClass("paysa-heading");
      $title = $("<div/>");
      $title.addClass("paysa-title");
      $title.html("BASE SALARY ESTIMATES");
      $title.appendTo($heading);
      $range = $("<div/>");
      $range.addClass("paysa-range");
      $range.html(data.minRange + " TO " + data.maxRange);
      $range.appendTo($heading);
      $left.append($heading);
      $powered = $("<div/>");
      $powered.addClass("paysa-powered");
      $poweredText = $("<div/>");
      $poweredText.addClass("paysa-powered-text");
      $poweredText.html("Powered by");
      $poweredText.appendTo($powered);
      $logoImg = $("<img/>");
      $logoImg.addClass("paysa-logo-img");
      $logoImg.attr("src", "//d2n9vrt7vtdwjk.cloudfront.net/assets/paysa-transparent-black-sm-1d52a95f285e259e6c241f665b6094f8.png");
      $logoImg.attr("width", "94");
      $logoImg.attr("height", "28");
      $logoImg.attr("title", "Paysa");
      $logoImg.attr("alt", "Paysa Logo");
      $logoLink = $("<a/>");
      $logoLink.addClass("paysa-logo-link");
      $logoLink.attr("href", "https://www.paysa.com");
      $logoLink.attr("title", "Paysa.com");
      $logoLink.attr("target", "_blank");
      $logoLink.append($logoImg);
      $logoLink.appendTo($powered);
      $left.append($powered);
      $right = $("<div/>");
      $right.addClass("paysa-right");
      $chartLink = $("<a/>");
      $chartLink.attr("href", "https://www.paysa.com/salaries/role-" + data.id);
      $chartLink.attr("target", "_blank");
      $chart = $("<div/>");
      $chart.addClass("paysa-chart");
      $chart.appendTo($chartLink);
      $chartLink.appendTo($right);
      addChart($chart);
      $styles = $("<style/>");
      $styles.attr("text/css");
      $styles.html("#paysa-salary-widget { font-family: 'Open Sans'; background-color: 'inherit'; box-sizing: border-box; } #paysa-salary-widget .paysa-left { width: 200px; float: left; } #paysa-salary-widget .paysa-right { width: 300px; float: left; } #paysa-salary-widget .paysa-title { font-weight: 700; font-size: 12px; line-height: 1.7; letter-spacing: 2px; color: #7d97ad; } #paysa-salary-widget .paysa-range { margin-top: 13px; font-weight: bold; font-size: 18px; line-height: 1.2; letter-spacing: 1.8px; color: #2e3d49; } #paysa-salary-widget .paysa-powered { margin-top: 30px; } #paysa-salary-widget .paysa-powered-text { font-size: 12px; line-height: 1.8; color: #7d97ad; } #paysa-salary-widget .paysa-chart { width: 300px; height: 130px; }");
      $root.append($styles);
      $root.append($left);
      $root.append($right);
      return $root.insertAfter($(currentNode));
    };
  })(this);

  promises = dependencies.map((function(_this) {
    return function(obj) {
      return loadDependency(window, obj[0], obj[1], obj[2]);
    };
  })(this));

  Promise.all(promises).then((function(_this) {
    return function() {
      return run();
    };
  })(this));

}).call(this);
