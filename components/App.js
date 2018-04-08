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
            <div className='app'>
                <ContactForm contact={contactForm} />
                <Contacts items={contacts} />
            </div>
        )
    }
});
