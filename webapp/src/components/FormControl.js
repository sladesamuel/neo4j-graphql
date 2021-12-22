export default ({ label, inputName, children }) => (
  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={inputName}>
      {label}
    </label>

    {children}
  </div>
)
