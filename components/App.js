var contacts = [
    {
        id: 1,
        firstName: 'John',
        lastName: 'Newman',
        email: 'john.newman@example.com'
    },
    {
        id: 2,
        firstName: 'Adam',
        lastName: 'Smith',
        email: 'adam.smith@example.com'
    },
    {
        id: 3,
        firstName: 'Ziggy',
        lastName: 'Goatt',
        email: 'ziggy.goatt@example.com'
    }
];

var contactForm = {
    firstName: '',
    lastName: '',
    email: ''
};

var App = React.createClass({
    render: function() {
        return (
            React.createElement('div', {className: 'app'},
                React.createElement(ContactForm, {contact: contactForm}),
                React.createElement(Contacts, {items: contacts}, {})
            )
        );
    }
});
