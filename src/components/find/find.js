import { useState } from 'react';
import './find.css';

const Find = (props) => {

    const [term, setTerm]  = useState('');
    const  buttonsDB = [
            { name: 'Brazil' },
            { name: 'Kenya' },
            { name: 'Columbia'},
            { name: 'All'}
        ]

    const onUpdateInput = (e) => {
        const term = e.target.value;
        setTerm(term);
        props.onUpdateSearch(term);
    }

    const buttons = () => {
     return   buttonsDB.map( ({name}) => {

        const active = props.filter === name;
        const clazz = active ? 'filter__button filter__button_selected' : 'filter__button';
              return (
                  <button type="button"
                          className={clazz}
                          key = {name}
                          onClick={() => props.onSelectFilter(name)}>
                          {name}
                  </button>
              )
          })
      }
        return (
            <div className="find">
            <div className="find__container">
                <div className="find__form">
                    <div className="form__seek">
                        <div htmlFor="seek">Lookiing for</div>

                        <input  type="text"
                                name="seek"
                                value={term}
                                onChange={onUpdateInput} /* підніття локального стану до родительского */
                                placeholder="start typing here..."/>

                    </div>

                    <div className="form__filter filter">
                        <div className="filter__label">Or filter</div>
                        {buttons()}
                    </div>
                </div>
            </div>
        </div>
        )

}

export default Find;
