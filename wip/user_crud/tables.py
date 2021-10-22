from flask_table import Table, Col, LinkCol

class Results(Table):
    agricultor_id = Col('agricultor_id', show=False)
    cultura_id = Col('cultura_id')
    cultura_nome = Col('cultura_nome')
    area_plantacao = Col('area_plantacao')
    quantidade_mao_de_obra = Col('quantidade_mao_de_obra')
    data_plantacao = Col('data_plantacao')
    data_colheita = Col('data_colheita')
    quantitade_plantada = Col('quantitade_plantada')
    quantidade_colheita = Col('quantidade_colheita')
    defensivos_agricolas = Col('defensivos_agricolas')
    add = LinkCol('Add', 'plant_add', url_kwargs=dict(id='user_id'))
    edit = LinkCol('Edit', 'plant_edit', url_kwargs=dict(id='cultura_id'))
    delete = LinkCol('Delete', 'plant_delete', url_kwargs=dict(id='cultura_id'))

#INSERT INTO cultura (agricultor_id, cultura_id, cultura_nome, area_plantacao, quantidade_mao_de_obra, data_plantacao,data_colheita, quantitade_plantada, quantidade_colheita, defensivos_agricolas) VALUES (%s, %s, %s, %s, %s, %s,%s, %s, %s, %s);