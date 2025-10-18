document.addEventListener('DOMContentLoaded', () => {
    const testBtn = document.getElementById('testBtn');
    const resultDiv = document.getElementById('result');

    testBtn.addEventListener('click', async () => {
        try {
            testBtn.disabled = true;
            testBtn.textContent = 'Testing...';
            
            const response = await fetch('/api/hello');
            const data = await response.json();
            
            resultDiv.className = 'result show success';
            resultDiv.textContent = `✓ Success! API Response: ${data.message}`;
        } catch (error) {
            resultDiv.className = 'result show error';
            resultDiv.textContent = `✗ Error: ${error.message}`;
        } finally {
            testBtn.disabled = false;
            testBtn.textContent = 'Test API Endpoint';
        }
    });
});
