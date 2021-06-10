import PropTypes from "prop-types";
import { connect } from 'react-redux';
import action from '../../redux/phonebook/phonebook-actions';
import styles from './Filter.module.scss';

const Filter = ({ value, onChange }) => {
  return (
    <label className={styles.filterLabel}>
      Find contacts by name
      <input className={styles.input}
        type='text'
        name='filter'
        value={value}
        onChange={onChange}
        placeholder='Enter name for Search'
      />
    </label>
  )
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: (e) => dispatch(action.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);