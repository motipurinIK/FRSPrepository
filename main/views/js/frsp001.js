$(function(){	

	// �����\�����́u�\������v�{�^�����\���ɂ���
	$('#predict-button').hide();
	
	$('#upload').on('change', function (e) {
		var reader = new FileReader();
		reader.onload = function (e) {
			$("#face-image-preview").attr('src', e.target.result);
		}
		reader.readAsDataURL(e.target.files[0]);
		
		// �u�\������v�{�^����\������
		$('#predict-button').show();
	});
	
});