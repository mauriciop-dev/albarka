import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Certificación de Experiencia - ALBARKA SAS',
  robots: {
    index: false,
    follow: false,
  },
};

const ExperiencePage = () => {
  const experienceData = [
    { 
      id: 1, 
      contratante: 'GROW DATA SAS', 
      valor: '161.57 SMMLV',
      objeto: 'Servicios de consultoría de negocios y administración corporativa'
    },
    { 
      id: 2, 
      contratante: 'GROW DATA SAS', 
      valor: '89.94 SMMLV',
      objeto: 'Servicios de consultoría de negocios y administración corporativa'
    },
    { 
      id: 3, 
      contratante: 'GROW DATA SAS', 
      valor: '63.90 SMMLV',
      objeto: 'Servicios de consultoría de negocios y administración corporativa'
    },
    { 
      id: 4, 
      contratante: 'GROW DATA SAS', 
      valor: '140.50 SMMLV',
      objeto: 'Servicios de consultoría de negocios y administración corporativa'
    },
    { 
      id: 5, 
      contratante: 'M S L DISTRIBUCIONES & CIA S.A.S', 
      valor: '84.30 SMMLV',
      objeto: 'Servicios de consultoría de negocios y administración corporativa'
    },
    { 
      id: 6, 
      contratante: 'PROMOTORA DE GASES DEL SUR S.A. E.S.P.', 
      valor: '4.09 SMMLV',
      objeto: 'Servicios de consultoría de negocios y administración corporativa'
    },
    { 
      id: 7, 
      contratante: 'TICDATA SAS', 
      valor: '269.23 SMMLV',
      objeto: 'Servicios de consultoría de negocios y administración corporativa'
    },
    { 
      id: 8, 
      contratante: 'TICDATA SAS', 
      valor: '2.76 SMMLV',
      objeto: 'Servicios de consultoría de negocios y administración corporativa'
    },
    { 
      id: 9, 
      contratante: 'TICDATA SAS', 
      valor: '40.00 SMMLV',
      objeto: 'Servicios de consultoría de negocios y administración corporativa'
    },
    { 
      id: 10, 
      contratante: 'TICDATA SAS', 
      valor: '9.15 SMMLV',
      objeto: 'Servicios de consultoría de negocios y administración corporativa'
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-8 font-sans">
      <h1 className="text-3xl font-bold mb-6 text-center">Resumen de Experiencia Certificada</h1>
      
      <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4 border-b pb-2">Información de la Certificación</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <p><strong>Entidad Emisora:</strong> Cámara de Comercio de Bogotá</p>
          <p><strong>Empresa:</strong> ALBARKA SAS</p>
          <p><strong>NIT:</strong> 901492652-0</p>
          <p><strong>ID Proponente:</strong> 00078415</p>
          <p><strong>Tipo Documento:</strong> Registro Único de Proponentes (RUP)</p>
          <p><strong>Fecha de Inscripción:</strong> 13 de Octubre de 2026</p>
          <p><strong>Fecha de Expedición:</strong> 28 de Octubre de 2026</p>
          <p><strong>Valor Certificado:</strong> $75.000 COP</p>
          <p className="md:col-span-2"><strong>Objeto Social:</strong> Servicios de consultoría de negocios y administración corporativa (Clasificación UNSPSC: 80101500)</p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Cuadro de Resumen de Experiencia</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="py-3 px-4 border-b">ID</th>
              <th className="py-3 px-4 border-b">Contratante</th>
              <th className="py-3 px-4 border-b">Valor Ejecutado (SMMLV)</th>
              <th className="py-3 px-4 border-b">Objeto</th>
              <th className="py-3 px-4 border-b">Ejecutado por</th>
            </tr>
          </thead>
          <tbody>
            {experienceData.map((exp) => (
              <tr key={exp.id} className="hover:bg-gray-50">
                <td className="py-2 px-4 border-b text-center">{exp.id}</td>
                <td className="py-2 px-4 border-b">{exp.contratante}</td>
                <td className="py-2 px-4 border-b font-mono">{exp.valor}</td>
                <td className="py-2 px-4 border-b text-sm">{exp.objeto}</td>
                <td className="py-2 px-4 border-b">ALBARKA SAS</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <footer className="mt-12 text-sm text-gray-500 text-center italic">
        Esta información ha sido extraída fielmente del Registro Único de Proponentes (RUP) emitido el 28 de octubre de 2026.
      </footer>
    </div>
  );
};

export default ExperiencePage;