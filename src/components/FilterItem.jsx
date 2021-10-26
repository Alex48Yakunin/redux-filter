import classNames from 'classnames';

export default function FilterItem ({id, name, price,match, filter, onUpdate, onDelete}){

  const filtered = (value, filter) => {
    if (filter) {
        const strRegExp = new RegExp(`${filter}`, 'gi'),
              strArr = value.split(strRegExp),
              matches = value.matchAll(strRegExp);
      
        let totalMatch = '';

        for (const string of strArr) {
          const el = matches.next(),
                result = (el.value) ? el.value[0] : null;
      
          totalMatch = <>{totalMatch}{string}<span style={{color: 'green', fontWeight: 'bold'}}>{result}</span></>;
        }
      
        return totalMatch;
    } else {
        return value;
    }
  }
      
  const filterName = (match && filter) ? filtered(name, filter) : name;

  const liClass = classNames({
    'non-filtered': filter && !match,
    'filtered': filter && match
  });

    return (
      <li className={liClass}>
        <span>{filterName}</span>&nbsp;
        <span style={{color: 'blue'}}>{price}</span>
        <button  onClick={() => onUpdate(id)} >EDIT</button>
        <button  onClick={() => onDelete(id)} >DELETE</button>
      </li>
    );
  }