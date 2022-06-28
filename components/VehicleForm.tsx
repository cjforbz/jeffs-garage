import { useState, ChangeEvent } from 'react';
import axios from 'axios';

const VehicleForm = () => {
  const [formData, setFormData] = useState({
    make: '',
    model: '',
    year: '',
    mileage: '',
  });
};
