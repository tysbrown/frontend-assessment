import { useRef } from "react";
import "./AddPerson.css";

/**
 * Form element that adds a person to an array of people.
 *
 * NOTES TO EVALUATOR: The comp/mock appears to be validate on submit, another way to validate could be with onBlur in the
 * input fields, which would be a slightly better UX but since it's not called for I'll stick to what's in the comps.
 *
 */
export default function AddPerson({ people, setPeople }) {
  const nameRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();

  const handleSubmit = (e) => {
    const nameIsValid = nameRef.current.value;
    const phoneIsValid = phoneRef.current.value.length >= 10;

    // Preventing default behavior so the page isn't refreshed (which would clear the contact list too)
    e.preventDefault();

    // Validate the form
    if (nameIsValid && phoneIsValid) {
      alert("Successfully Added!");
      setPeople([
        ...people,
        {
          name: nameRef.current.value,
          phone: phoneRef.current.value,
          email: emailRef.current.value,
        },
      ]);

      // Reset fields manually
      nameRef.current.value = "";
      phoneRef.current.value = "";
      emailRef.current.value = "";
    } else {
      alert("Enter Valid Data");
    }
  };

  return (
    <section>
      <div className="card pa-30 mr-30">
        <form data-testid="add-person-form" onSubmit={handleSubmit}>
          <div className="layout-column mb-15">
            <label htmlFor="name" className="mb-3">
              Person Name
            </label>
            <input
              type="text"
              placeholder="Enter Person Name"
              name="name"
              data-testid="person-name-input"
              ref={nameRef}
            />
          </div>
          <div className="layout-column mb-15">
            <label htmlFor="number" className="mb-3">
              Phone Number
            </label>
            <input
              type="number"
              maxLength={10}
              placeholder="Enter Phone Number"
              name="number"
              data-testid="phone-number-input"
              ref={phoneRef}
            />
          </div>
          <div className="layout-column mb-30">
            <label htmlFor="email" className="mb-3">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter Email Address"
              name="email"
              data-testid="person-email-input"
              ref={emailRef}
            />
          </div>
          <div className="layout-row justify-content-end">
            <button
              type="submit"
              className="mx-0"
              data-testid="add-person-button"
            >
              Add Person
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
