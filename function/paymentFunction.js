const processTransaction = async (transaction) => {
	try {
		console.log('Transaction processing started for:', transaction);

		await new Promise((resolve) => setTimeout(resolve, 3000));

		console.log('Transaction processed successfully:', transaction);
		return { ...transaction, status: 'success' };
	} catch (error) {
		console.error('Error processing transaction:', error);
		throw new Error('Transaction processing failed');
	}
};

module.exports = { processTransaction };
