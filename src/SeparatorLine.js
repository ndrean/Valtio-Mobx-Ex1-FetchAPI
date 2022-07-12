export default ({ text }) => {
  return (
    <table style={{ width: "100%" }}>
      <tbody>
        <tr>
          <td>
            <hr />
          </td>
          <td style={{ width: "1px", padding: "0 10px", whiteSpace: "nowrap" }}>
            {text}
          </td>
          <td>
            <hr />
          </td>
        </tr>
      </tbody>
    </table>
  );
};
