import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';
import SearchBar from '../Components/SearchBar/SearchBar';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe("Filter function", () => {
  test("it should filter by a search term (link)", () => {
    const input = [
      { id: 1, url: "http://localhost:5500/resources" },
      { id: 2, url: "http://localhost:5500/weeks" },
      { id: 3, url: "http://localhost:5500/glosery" }
      ];
    
    
    
  const output = [{ id: 3, url: "http://localhost:5500/resources" }];
  expect(filterByTerm(input, "link")).toEqual(output);

      


  });
});


describe("Filter function", () => {
  test("it should filter by a search term (link)", () => {
    const input = [
      { id: 1, url: "http://localhost:5500/resources" },
      { id: 2, url: "http://localhost:5500/weeks" },
      { id: 3, url: "http://localhost:5500/glosery" }
    ];

    const output = [{ id: 3, url: "https://www.link3.dev" }];

    expect(filterByTerm(input, "link")).toEqual(output);

    expect(filterByTerm(input, "LINK")).toEqual(output);
  });
});
