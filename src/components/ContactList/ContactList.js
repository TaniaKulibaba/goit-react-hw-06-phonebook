import { connect } from 'react-redux';
import action from '../../redux/phonebook/phonebook-actions';
import PropTypes from 'prop-types';
import ContactListItem from '../ContactListItem';
import styles from './ContactList.module.scss';


const ContactList = ({ list, onClick }) => {
  if (list.length === 0) return null
  return (
    <ul className={styles.list}>
      {list.map((item) => (
        <ContactListItem key={item.id} id={item.id} name={item.name} number={item.number} onClick ={onClick} />
      ))}
    </ul>
  )
};

ContactList.propTypes = {
  list: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

const getVisibleContacts = (items, filter) => {
    return items.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()))
};

const mapStateToProps = state => ({
  list: getVisibleContacts(state.contacts.items, state.contacts.filter),
});

const mapDispatchToProps = dispatch => ({
  onClick: (id) => dispatch(action.removeContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);