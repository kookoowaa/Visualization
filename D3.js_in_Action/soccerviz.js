function createSoccerViz() {
	//데이터를 로딩하고 로딩된 데이터로 overallTeamViz() 함수를 호출
	d3.csv("worldcup.csv")
	  .then(function(data){
	  	overallTeamViz(data);
	  })

	function overallTeamViz(incomingData) {
		//팀별로 <g>를 만들어 레이블을 붙인다. 나중에 더 많은 요소를 추가한다.
		d3.select("svg")
		  .append("g")
		  .attr("id", "teamsG")
		  .attr("transform", "translate(50,300)")
		  .selectAll("g")
		  .data(incomingData)
		  .enter()
		  // <svg>요소에 <g>그룹을 추가하고 자신의 콘텐츠를 중앙으로 이동시킨다.
		  .append("g")
		  .attr("class", "overallG")
		  .attr("transform", function(d,i) {return "translate("+(i*50)+",0)"});

		// d3.selectAll() 반복 방지를 위해 변수로 할당
		var teamG = d3.selectAll("g.overallG")
		teamG.append("circle")
		     .attr("r", 20)
		     .style("fill", "pink")
		     .style("stroke", "black")
		     .style("stroke-width", "1px");

		teamG.append("text")
		     .style("text-anchor", "middle")
		     .attr("y", 30)
		     .style("font-size", "10px")
		     .text(function(d) {return d.team})

	}
}