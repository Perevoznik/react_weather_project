import React from 'react';

class Form extends React.Component {

    render() {
        return (
            <form onSubmit={this.props.weatherMethod}>
                <input type="text" className="form-control" name="city" placeholder="Название города" />
                <button>Получить погоду</button>
            </form>
        );
    }
}

export default Form;