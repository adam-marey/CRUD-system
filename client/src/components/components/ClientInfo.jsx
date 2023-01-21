import { FaEnvelope, FaPhone, FaIdBadge } from 'react-icons/fa';

export default function ClientInfo({ client }) {
  return (
    <>
      <h5 className='mt-5'>Client Information</h5>
      <ul className='list-group'>
        <li className='list-group-item'>
          <FaIdBadge className='icon' /> {client.name}
        </li>
        <li className='list-group-item'>
          <FaEnvelope className='icon' /> {client.email}
        </li>
        <li className='list-group-item'>
          <FaPhone className='icon' /> {client.phone}
        </li>
      </ul>
      <hr />
      <h3>Progress</h3>
<div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar w-75"></div>
</div>

    </>
  );
}