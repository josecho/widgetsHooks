import React, { useState, useEffect } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Pagination from './components/Pagination';
import { useBreakpoints, useCurrentWidth } from './hooks/useBreakpoints';

const items = [
  {
    title: 'What is React?',
    content: 'React is a front end javascript framework',
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite JS library among engineers',
  },
  {
    title: 'How do you use React?',
    content: 'You use React by creating components',
  },
];

const options = [
  {
    label: 'January',
    value: 'Jan',
  },
  {
    label: 'Febrero',
    value: 'Feb',
  },
  {
    label: 'marzo',
    value: 'mar',
  },
  {
    label: 'april',
    value: 'apr',
  },
  {
    label: 'mayo',
    value: 'may',
  },
  {
    label: 'junio',
    value: 'xun',
  },
  {
    label: 'july',
    value: 'jul',
  },
  {
    label: 'augustu',
    value: 'aug',
  },
  {
    label: 'setember',
    value: 'sep',
  },
  {
    label: 'octoberr',
    value: 'oct',
  },
  {
    label: 'nov',
    value: 'nov',
  },
  {
    label: 'dec',
    value: 'dec',
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  let width = useCurrentWidth();
  let { xs, sm, md, lg } = useBreakpoints({
    xs: { min: 0, max: 360 },
    sm: { min: 361, max: 960 },
    md: { min: 961, max: 1400 },
    lg: { min: 1401, max: null },
  });


  const [month, setMotnh] = useState();

  useEffect(() => {
    const index = options.findIndex(x => x.value === selected.value);
    setMotnh(index);
    console.log("index:", index);
  }, [selected]);

  function handlePageChange(newPage) {
    console.log("new page:", newPage)
  }

  return (


    <Search />


  );

  /* return (
    <>
      <div>
        <Dropdown
          label="Select a Language"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
        <Pagination month={month} onPageChange={handlePageChange} />
      </div>
      <div>
        <h1>
          {`Current width -> ${width}`}
        </h1>
        <p>
          {`Breakpoint: xs(${xs}) sm(${sm}) md(${md}) lg(${lg})`}
        </p>
      </div>
    </>
  ); */







};
export default App;
