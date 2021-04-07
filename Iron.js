class Iron{
	constructor(x,y,r)
	{
	var options={
		restitution:0.8,
		friction:3,
		density:30
	}
    this.body = Bodies.rectangle(x, y, 50, 50, options);
    this.width = 150;
    this.height = 40;
    World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("silver");
			//draw the ellipse here to display the rubber ball
            rect(0, 0, this.width, this.height);
			pop()
	}

}