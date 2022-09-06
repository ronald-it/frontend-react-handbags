import React from "react";

function Button({disableToggle, buttonText}) {
    return <button
        name="button"
        type="button"
        onClick={(e) => {
            console.log(buttonText)
            console.log(disableToggle)
            }
        }
        disabled={disableToggle}
    >
        {buttonText}
    </button>
}

export default Button;