export default function CodeExplanation({ code, codeTitle }) {
  //   const jsCode = `
  //  // Ejemplo de código - Middleware de autenticación
  // const jwt = require('jsonwebtoken');

  // const auth = (req, res, next) => {
  //   const token = req.header('x-auth-token');

  //   if (!token) {
  //     return res.status(401).json({ msg: 'No token, authorization denied' });
  //   }

  //   try {
  //     const decoded = jwt.verify(token, process.env.JWT_SECRET);
  //     req.user = decoded.user;
  //     next();
  //   } catch (err) {
  //     res.status(401).json({ msg: 'Token is not valid' });
  //   }
  // };
  //     `;

  return (
    <div className="rounded-lg border border-gray-400 bg-gray-100 p-4">
      <h2 className="mb-2 font-poppins text-xl font-bold">{codeTitle}</h2>
      <pre className="overflow-x-auto rounded-lg p-4">
        <code dangerouslySetInnerHTML={{ __html: code }} />
      </pre>
    </div>
  );
}
