"use strict";

const React = require('react');
const {Menu, MenuItem} = require('react-bootstrap-typeahead');
const DefaultTypeahead = require('react-bootstrap-typeahead').Typeahead;
const {InputGroup} = require('react-bootstrap');
const PropTypes = require('prop-types').PropTypes;
const {createDataPlaceholder, getMaxScrollLength, getLabelFromId, getValidNumber, getValidText} = require('./utilities');

class Typeahead extends React.Component {
    constructor(props) {
        super(props);
        // Default parameters for used library
        DefaultTypeahead.defaultProps.positionFixed = true;
        DefaultTypeahead.defaultProps.align = "left";
        DefaultTypeahead.defaultProps.highlightOnlyResult = true;
        DefaultTypeahead.defaultProps.flip = true;
        // State generated by props
        this.state = {
            text: props.value.toString(),
            order: true
        };
        // Hooks for event management
        this.defaultTypeahead = React.createRef();
        this.observer = undefined;
    }

    /**
     * Wrapper for handling onFocus events
     */
    handleOnFocus() {
        // Check if web hook is created
        if (this.defaultTypeahead.current) {
            // Assign last valid item for event purposes
            this.setState({text: this.props.value.toString()});
            // Scroll down/up to selected item if it exist
            this.updateActiveItem(this.props.stat, this.props.options, this.state.text, this.state.order);
            // Select input text box for easy editing
            this.defaultTypeahead.current.getInput().select();
            // Call parent onFocus if it exist
            if (this.props.onFocus) {
                this.props.onFocus();
            }
        }
    }

    /**
     * Returns the value of this instance
     * @returns {number|string|any} value
     * @param _val
     */
    onRequestValue(_val = this.defaultTypeahead.current.state.text) {
        switch (this.props.type) {
            case "number":
                return getValidNumber(_val, this.props.min, this.props.max, this.state.text);
            case "text":
                return getValidText(_val, this.state.text);
            default:
                return _val;
        }
    }

    /**
     * Wrapper for handling onBlur events
     */
    handleOnBlur() {
        // Check if web hook is created
        if (this.defaultTypeahead.current && this.props.onBlur) {
            // Get text from input box and convert it to valid data
            if (this.props.onChange) {
                // Get text from input box and convert it to valid data
                let e = createDataPlaceholder(this.onRequestValue(this.defaultTypeahead.current.state.text, this, this.defaultTypeahead.current.state.text));
                this.props.onChange(this.props.stat, e);
            }
            // Call parent onBlur
            this.props.onBlur();
        }
    }

    /**
     * Wrapper for handling onChange events
     */
    handleOnChange() {
        // Check if web hook is created
        if (this.defaultTypeahead.current) {
            // Scroll down/up to written item if it exist
            this.updateActiveItem(this.props.stat, this.props.options, this.defaultTypeahead.current.state.text, this.state.order);
            // Create dummy data structure for legacy code and call parent
            let e = createDataPlaceholder(this.defaultTypeahead.current.state.text);
            this.props.onChange(this.props.stat, e);
        }
    }

    /**
     * This function scrolls down on scrollable dom if there is a selected element in dropdown.
     * @param id id of the downdown menu
     * @param options possible selections
     * @param value selected value
     * @param order dropdown orientation. If it is true dropdown goes from top to down and vice versa for false
     * @param index index of the selected item to be assigned
     * @returns {boolean} whatever operation is successful or not
     */
    updateActiveItem(id, options, value, order, index = -1) {
        // Get dropdown dom
        let dropdown = document.getElementById(id);
        if (dropdown) {
            // Find total length of scrollable dom
            let maxScrollLength = getMaxScrollLength(dropdown);
            // Check if item on input exist or not
            if ((index = options.indexOf(value.toString())) >= 0) {
                // if it exist scroll down to it
                if (!order) {
                    index = options.length - index - 1;
                }
                dropdown.scrollTop = (maxScrollLength / options.length) * (index + 0.5);
            } else {
                // Otherwise go to start of the dom
                if (this.state.order === false) {
                    dropdown.scrollTop = maxScrollLength
                } else {
                    dropdown.scrollTop = 0;
                }
            }
            return true;
        }
        return false;
    }

    /**
     * Hook for onRender method of typeahead.
     * @param results all possible options
     * @param menuProps props to be passed to menu
     * @returns {ReactDOM} item to be rendered
     */
    renderMenu(results, menuProps) {
        // If dropdown opens bottom-up reverse order of items
        if (!this.state.order) {
            results = results.reverse();
        }
        return (
            <Menu {...menuProps}>
                {
                    results.map(
                        (result, index) => (
                            <MenuItem option={result.id || result}
                                      position={index}
                                      className={(this.props.value.toString() === result) ? "active" : ""}
                                      key={index}>
                                {result.label || result}
                            </MenuItem>
                        )
                    )
                }
            </Menu>
        )
    }

    /**
     * Filtering logic for dropdown.
     * @param option UNUSED. Option to be checked.
     * @param props UNUSED. Props to be passed.
     * @returns {boolean} Whatever item should be shown or not.
     */
    filterResults(option, props) {
        return true;
    }

    /**
     * Creates mutation observer to check if user scrolls down or up on the screen and update dropdown accordingly.
     * @param instance Typeahead web hook.
     * @param ref Input web hook.
     */
    createObserver(instance, ref) {
        // eslint-disable-next-line no-undef. Get whichever mutation observer used by different browsers.
        // Mostly for old versions of Firefox, Palemoon and Safari.
        let observerInstance = MutationObserver || WebKitMutationObserver || MozMutationObserver;
        this.observer = new observerInstance(function (mutations) {
            mutations.forEach(function () {
                // Update dropdown orientation
                instance.updateScreenOrientation(instance, ref);
            });
        });
    }

    /**
     * Updates dropdown screen orientation according to client viewport
     * @param instance Typeahead web hook.
     * @param ref Input web hook.
     */
    updateScreenOrientation(instance, ref) {
        // Check if dropdown flipped in order to fit screen
        if (instance.state.order !== $(ref.getInput()).offset().top < $('#' + ref.props.id).offset().top) {
            // If flipped update dropdown items and rerender
            instance.setState({order: !instance.state.order});
            this.updateActiveItem(instance.props.stat, instance.props.options, ref.state.text, instance.state.order);
            // If tooltip exists flip it as well
            if (instance.props.tooltip) {
                instance.props.tooltip.setPlacement(instance.state.order);
            }
        }
    }

    /**
     * Wrapper for handling onMenuToggle events.
     * @param isOpen Whatever menu is opened or closed.
     */
    onMenuToggle(isOpen) {
        if (isOpen) {
            // Create mutation observer to track screen events when dom is ready
            $('#' + this.props.stat).ready(() => {
                this.updateScreenOrientation(this, this.defaultTypeahead.current);
                let menu = document.getElementById(this.props.stat);
                this.createObserver(this, this.defaultTypeahead.current);
                this.observer.observe(menu, {
                    attributes: true,
                    attributeFilter: ['style']
                });
            });
        } else {
            // Destroy mutation observer to save resources when menu is closed
            if (this.observer) {
                this.observer.disconnect();
                this.observer = undefined;
            }
        }
    }

    /**
     * React component entry point
     * @returns {string} Dom to be drawn
     */
    render() {
        // Create props to be passed to html input dom
        let inputProps = {};
        // Check if user send custom inputProps
        if (this.props.inputProps !== undefined) {
            inputProps = this.props.inputProps;
            // Check if user provided type for input field and assign it if they did
            if (inputProps["type"] === undefined) {
                inputProps["type"] = this.props.type;
            }
        } else {
            // Otherwise assume data type is same as input type
            inputProps = {type: this.props.type};
        }

        let typeahead = "";
        // Check if required props are provided.
        if (this.props.value !== undefined && this.props.options && this.props.stat && this.props.onChange) {
            typeahead = <DefaultTypeahead
                id={this.props.stat}
                selected={[getLabelFromId(this.props.options, this.props.value.toString())]}
                inputProps={inputProps}
                onFocus={this.handleOnFocus.bind(this)}
                onBlur={this.handleOnBlur.bind(this)}
                onChange={this.handleOnChange.bind(this)}
                renderMenu={this.renderMenu.bind(this)}
                onMenuToggle={this.onMenuToggle.bind(this)}
                filterBy={this.filterResults.bind(this)}
                ref={this.defaultTypeahead}
                options={this.props.options}/>
        }

        // Check if InputGroup.AddOn is requested and add it if it did.
        if (this.props.addon) {
            typeahead = <InputGroup>{typeahead}<InputGroup.Addon>{this.props.addon}</InputGroup.Addon></InputGroup>
        }

        // Return dom
        return typeahead
    }

}

Typeahead.propTypes = {
    value: PropTypes.any.isRequired,
    options: PropTypes.arrayOf(PropTypes.any).isRequired,
    stat: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    type: PropTypes.oneOf(['text', 'number']),
    min: PropTypes.number,
    max: PropTypes.number,
    addon: PropTypes.string,
    tooltip: PropTypes.object,
    inputProps: PropTypes.object
};

Typeahead.defaultProps = {
    type: 'number',
    min: -100,
    max: 1000
};

module.exports.Typeahead = Typeahead;