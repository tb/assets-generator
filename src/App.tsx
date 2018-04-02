// tslint:disable:semicolon
import * as React from 'react';

type AppState = {
  title: string;
  description: string;
  hasSponsors: boolean;
  datetime: string;
  city: string;
};
class App extends React.Component<{}, AppState> {
  state = {
    title: 'meet.js Gdańsk #23',
    description: '#javascript #front-end #meetup #networking  #najlepsimentorzy #jużwkrótce',
    hasSponsors: false,
    datetime: '2018-04-27T18:00',
    city: 'Warszawa',
  };
  render() {
    return (
      <div className="app-container">
        {this.renderMeta()}
        <main className="template-container">{this.renderTemplate()}</main>
      </div>
    );
  }

  private renderMeta() {
    return (
      <aside className="meta">
        <label className="meta-label">
          <span className="meta-label-text">Sponsorzy?</span>{' '}
          <input type="checkbox" onChange={this.handleSponsorsChange} />
        </label>
        <label className="meta-label">
          <span className="meta-label-text">Tytuł</span>
          <input onChange={this.handleFieldChange} value={this.state.title} name="title" />
        </label>
        <label className="meta-label">
          <span className="meta-label-text">Hashtagi</span>
          <textarea
            rows={5}
            onChange={this.handleFieldChange}
            value={this.state.description}
            name="description"
          />
        </label>
        <label className="meta-label">
          <span className="meta-label-text">Data i czas</span>
          <input
            type="datetime-local"
            onChange={this.handleFieldChange}
            value={this.state.datetime}
            name="datetime"
          />
        </label>
      </aside>
    );
  }

  private renderTemplate() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 861 450" width="861">
        <path fill="#2b1c34" fillRule="evenodd" d="M0 0h668v450H0z" />
        <path fill="#eceff1" fillRule="evenodd" d="M668 0h193v450H668z" />
        <path
          fill="#bddb59"
          fillRule="evenodd"
          d="M0 292h64v52H0zm612-189h23v34h-23zm211 0h7v241h-7zm-98 189h6v106h-6z"
        />
        <path
          fill="#249fab"
          fillRule="evenodd"
          d="M579 192h152v52H579zm152-65h64v10h-64zm63 313h36v10h-36z"
        />
        <path fill="none" stroke="#3a3349" strokeWidth="2" d="M-1 243h580" />
        {this.state.hasSponsors && (
          <path fill="#ffffff" fillRule="evenodd" d="M658 0h203v450H658z" />
        )}
        <text fontFamily="Montserrat" fontWeight="700" y="227" x="97" fill="white" fontSize="34px">
          {this.state.title}
        </text>
        <text
          fontFamily="Montserrat"
          fontWeight="400"
          y="280"
          x="97"
          fill="#78909c"
          fontSize="16px"
        >
          {this.state.description}
        </text>
        <text
          fontFamily="Montserrat"
          fontWeight="900"
          y="340"
          x="97"
          fill="#bddb59"
          fontSize="16px"
          wordSpacing="1ex"
        >
          {this.formatDate(this.state.datetime)} // {this.state.city}
        </text>
      </svg>
    );
  }

  private formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    const year = String(date.getFullYear()).slice(2, 4);
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate());
    const hour = String(date.getHours());
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return ` ${day}.${month}.${year} // ${hour}:${minutes} `;
  }

  private handleFieldChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    // tslint:disable-next-line:no-console
    const { name, value } = e.currentTarget;
    this.setState({
      // tslint:disable-next-line:no-any
      [name as any]: value,
    });
  };

  private handleSponsorsChange = () => {
    this.setState((state) => ({ hasSponsors: !state.hasSponsors }));
  };
}

export default App;