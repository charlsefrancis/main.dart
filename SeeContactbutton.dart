import 'package:flutter/material.dart';
import 'package:permission_handler/permission_handler.dart';
import 'package:flutter/cupertino.dart';

import 'package:contacts_app/contactsPage.dart';


class SeeContactsButton extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return RaisedButton(
      onPressed: () async {Jim
        final PermissionStatus permissionStatus = await _getPermission();
        if (permissionStatus == PermissionStatus.granted) {
          Navigator.push(
              context, MaterialPageRoute(builder: (context) => ContactsPage()));
        } else {
          //If permissions have been denied show standard cupertino alert dialog
          showDialog(
              context: context,
              builder: (BuildContext context) => CupertinoAlertDialog(
                    title: Text('Permissions error'),
                    content: Text('Please enable contacts access '
                        'permission in system settings'),
                    actions: <Widget>[
                      CupertinoDialogAction(
                        child: Text('OK'),
                        onPressed: () => Navigator.of(context).pop(),
                      )
                    ],
                  ));
        }
      },
      child: Container(child: Text('See Contacts')),
    );
  }
