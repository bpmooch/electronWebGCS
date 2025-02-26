import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlaneArrival } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';
import { useEffect } from 'react';

const INAIR_REST_ENDPOINT = 'http://localhost:8081/inAir';

function LandDrone() {
  fetch('http://localhost:8081/land', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
}

function LandButton() {
  const [inAir, setInAir] = useState({});
  useEffect(() => {
    const timer = setInterval(async () => {
      const res = await fetch(INAIR_REST_ENDPOINT);
      const newinAir = await res.json();
      setInAir(newinAir);
    }, 100);

    return () => clearInterval(timer);
  }, []);
  return (
    <Button
      variant="dark"
      hidden={!inAir.is_in_air}
      onClick={() => LandDrone()}
    >
      <FontAwesomeIcon icon={faPlaneArrival} color="white" />
    </Button>
  );
}

export default LandButton;
