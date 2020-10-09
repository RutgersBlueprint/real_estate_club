import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-executives',
  templateUrl: './executives.component.html',
  styleUrls: ['./executives.component.css']
})
export class ExecutivesComponent implements OnInit {
  executives: Executive[];
  constructor() { 

  }

  ngOnInit() {
    this.executives = [new Executive(
      "https://www.broadwayjiujitsu.com/wp-content/uploads/2017/04/default-image.jpg",
      "Aurelia Del Rossi",
      "Club Vice President, Realtor & Leasing Agent, & Real Estate Development Analyst Intern",
      "Aurelia is a Senior at the Rutgers Business School, pursuing a major in Finance with a concentration in Real Estate. She currently works as a part-time leasing agent for Tverdov Housing, a property management company while also interning at Kokes Properties, a real estate development firm in hopes of transitioning from property management to commercial real estate development. In the future she wants to pair the ability to buy and sell houses with a full-time job in real estate development."
    )];
    this.executives.push(new Executive(
      "https://www.broadwayjiujitsu.com/wp-content/uploads/2017/04/default-image.jpg",
      "Kunal Bhosale",
      "Club Marketing Manager",
      "Kunal is a Junior at the Rutgers Business School, majoring in Business Analytics and Information Technology as well as minoring in Computer Science. He has a strong interest in real estate and hopes to use his skills and knowledge as a real estate investment analyzer. Outside of school, Kunal loves to play tennis and hike."
    ))
    this.executives.push(new Executive(
      "https://www.broadwayjiujitsu.com/wp-content/uploads/2017/04/default-image.jpg",
      "Frank LoPiccolo",
      "Club Chief Accountability Officer, Summer Financial Analyst Intern",
      "Frank is a junior at the Rutgers Business School, majoring in Finance with a concentration in Real Estate. Last summer, Frank completed a summer internship with Johnson & Johnson's Tax department. Next summer, Frank will be a Summer Analyst with Syneos Health in Raleigh, North Carolina. In the future, Frank wants to become a licensed agent and open his own business."
    ))
    this.executives.push(new Executive(
      "https://www.broadwayjiujitsu.com/wp-content/uploads/2017/04/default-image.jpg",
      "Eshan Kadam",
      "Club President",
      "Eshan is a senior at Rutgers Business school majoring in Finance with a concentration in Real Estate. Eshan has experience in Real Estate Law, Brokerage, and Wealth Management. He finds a passion for real estate through the long-term value the industry adds to the world. He is currently pursuing a career in Private Equity - Real Estate. In his free time, Eshan enjoys boxing, mountain biking, and playing the drums."
    ))
    this.executives.push(new Executive(
      "https://www.broadwayjiujitsu.com/wp-content/uploads/2017/04/default-image.jpg",
      "Muhammad Dutt",
      "Club Treasurer, Real Estate Development Intern",
      "Muhammad is a junior studying Finance, Economics, and Real Estate at Rutgers. He currently works full-time at Blackstone 360. Muhammad is pursuing a career in real estate development. In his free time, he likes to play sports and race cars."
    ))
    this.executives.push(new Executive(
      "https://www.broadwayjiujitsu.com/wp-content/uploads/2017/04/default-image.jpg",
      "Madeline Delayo",
      "RREC Social Media Manager, Commercial Real Estate Research Analyst Intern",
      "Madeline is currently a junior at the Rutgers Business School pursuing a degree in Finance with a minor in Psychology and a concentration in Real Estate. She is currently interning for a commercial real estate firm, Berko & Associates, and its sister private equity firm, Astor Realty Capital. Madeline is also an active member of the Community Committee in the Rutgers Undergraduate Women in Business club, and she helps train service dogs in the Rutgers University Companion Animal Club. In the future, she plans on using her experience and what she’s learned to become a key player in the real estate market."
    ))
    console.log("executives", this.executives)
  }

}

export class Executive {
  constructor(
    public imagePath: string,
    public name: string,
    public headline: string,
    public description: string
  ){}
}
